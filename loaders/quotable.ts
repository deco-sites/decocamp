import { Quotes } from "deco-sites/decocamp/loaders/zenquotes.ts";

export interface Props {
  quantity?: number;
}

export default async function zenquotes(
  props: Props,
  _req: Request,
  _ctx: unknown,
): Promise<Quotes> {
  const quantity = props.quantity ?? 1;
  const promises = Array.from({ length: quantity }).map(() =>
    fetch("https://api.quotable.io/random")
  );
  const responses = await Promise.all(promises);
  const data = await Promise.all(responses.map((res) => res.json()));
  return { data: data.map((quote) => quote.content) };
}
