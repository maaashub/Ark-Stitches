import { WhatsAppForm } from "./WhatsAppForm";

export const Discover = () => {
  return (
    <header
      className="flex w-full flex-col justify-center text-center my-12 mt-24"
      id="Home"
    >
      <h1 className="text-4xl leading-snug font-semibold text-black/80 dark:text-gray-200">
        Discover Your Signature
        <br />
        <span className="text-green-500/40">Style</span> &{" "}
        <span className="text-pink-400/40">Elevate</span> Your
        <br />
        Wardrobe
      </h1>

      <p className="text-balance w-[400px] self-center mt-4">
        ArkStitches and Fashion Academy based in Abuja, F.C.T, Nigeria. At
        ArkStitches, we understand the significance of events and as such have
        been able to establish as a premier destination for individuals seeking
        elegant and stylish dresses We are dedicated to providing an exceptional
        customer experience.
      </p>
      <WhatsAppForm />
    </header>
  );
};
