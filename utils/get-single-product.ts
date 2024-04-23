import { BASE_URL } from "@/config";

export async function getSingleProduct({
  id,
}: {
  id: string;
}): Promise<ProductProps | null> {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      console.log("error", data);
      return null;
    }
  } catch (error) {
    console.log("error catch", error);
    return null;
  }
}
