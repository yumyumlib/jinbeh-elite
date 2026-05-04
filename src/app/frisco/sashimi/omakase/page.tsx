import { redirect } from "next/navigation";

// Omakase has been removed from the Jinbeh menu.
// Redirect any guest landing here to the Frisco sashimi menu.
export default function OmakaseRedirect(): never {
  redirect("/frisco/sashimi");
}
