import axios from "@/lib/axios";

interface Props {
  url: string;
  method?: "get" | "post" | "put" | "delete" | "patch";
  type?: string;
  data?: any;
  params?: any;
}

const getResponse = async ({
  url,
  method = "get",
  type = "application/json",
  data = {},
  params = {},
}: Props) => {
  const myHeader = { "Content-Type": type };

  const result = await axios({
    method,
    url,
    data,
    headers: myHeader,
    params: { ...params },
  });

  return result;
};

export default getResponse;
