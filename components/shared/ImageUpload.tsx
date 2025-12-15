"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { uploadImage } from "@/actions/uploadImage";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError("");
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const result = await uploadImage(formData);

      if (result.success && result.url) {
        onChange(result.url);
      } else {
        setError(result.error || "Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      setError("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={uploading}
          className="cursor-pointer"
        />
      </div>

      {error && (
        <p className="text-sm text-red-500 text-center">{error}</p>
      )}

      {uploading && (
        <p className="text-sm text-muted-foreground text-center">
          Uploading...
        </p>
      )}

      {value && !uploading && (
        <div className="relative w-32 h-32 mx-auto">
          <Image
            src={value}
            alt="Preview"
            fill
            className="object-cover rounded-full"
          />
          <Button
            type="button"
            variant="destructive"
            size="sm"
            onClick={() => onChange("")}
            className="absolute -top-2 -right-2"
          >
            Remove
          </Button>
        </div>
      )}
    </div>
  );
}
