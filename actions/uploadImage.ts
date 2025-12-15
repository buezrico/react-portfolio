"use server";

import { put } from "@vercel/blob";

export async function uploadImage(formData: FormData) {
  const file = formData.get("file") as File;

  if (!file) {
    return {
      success: false,
      error: "No file provided",
    };
  }

  // Validate file type
  if (!file.type.startsWith("image/")) {
    return {
      success: false,
      error: "File must be an image",
    };
  }

  // Validate file size (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    return {
      success: false,
      error: "Image must be less than 5MB",
    };
  }

  try {
    const blob = await put(file.name, file, {
      access: "public",
      addRandomSuffix: true,
    });

    return {
      success: true,
      url: blob.url,
    };
  } catch (error) {
    console.error("Upload error:", error);
    return {
      success: false,
      error: "Upload failed",
    };
  }
}
