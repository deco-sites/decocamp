export interface Props {
  coupon: string;
  text: string;
}

export default function Coupon( { coupon, text } : Props) {
  return (
    <div class="max-w-screen-xl flex flex-col items-center justify-center mt-4">
      <p>{coupon}</p>
      <p>{text}</p>
    </div>
  )
}