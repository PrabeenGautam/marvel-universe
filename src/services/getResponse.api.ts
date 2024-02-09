import axios from "@/lib/axios";

interface Props {
  url: string;
  method?: "get" | "post" | "put" | "delete" | "patch";
  type?: string;
  data?: any;
  params?: any;
}

const getResponse = async ({
  method = "get",
  type = "application/json",
  data = {},
  params = {},
  ...props
}: Props) => {
  const result = await axios({
    method,
    url: props.url,
    data,
    headers: { "Content-Type": type },
    params: { ...params },
  });

  return result.data;
};

export default getResponse;
