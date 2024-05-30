import useSWR from "swr";

const getProductsResponse = async () => {
    const response = await fetch(`http://localhost:3000/products`)
    const products = await response.json()
    return products
}

export const products = await getProductsResponse();

const fetchProduct = async (url) =>
    axios.get(url).then((response) => response.data);

  const { data, isLoading } = useSWR(
    "http://localhost:3000/products",
    fetchProduct
  );
// export const products = data;
