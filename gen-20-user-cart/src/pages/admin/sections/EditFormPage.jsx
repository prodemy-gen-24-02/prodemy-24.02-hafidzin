import EditForm from "../../../components/admin/form/EditForm";
import useSWR from "swr";
import axios from "axios";
import Navbar from "../../../components/admin/Navbar";
import Loading from "../../../Loading";

export default function EditFormPage() {
  const fetchProduct = (url) =>
    axios.get(url).then((response) => response.data);

  const { data, isLoading } = useSWR(
    "http://localhost:3000/products",
    fetchProduct
  );
  return <>{isLoading ? <Loading /> : <EditForm products={data} />}</>;
}
