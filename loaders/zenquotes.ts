export interface Quotes {
  data: string[];
}

export interface Props {
  quantity?: number;
}

export default async function zenquotes(props: Props, _req: Request, _ctx: unknown): Promise<Quotes> {
  const quantity = props.quantity ?? 1;
  const promises = Array.from({ length: quantity }).map(() =>
    fetch("https://zenquotes.io/api/random")
  );
  const responses = await Promise.all(promises);
  const data = await Promise.all(responses.map((res) => res.json()));
  return { data: data.map((quote) => quote[0].q) };
}