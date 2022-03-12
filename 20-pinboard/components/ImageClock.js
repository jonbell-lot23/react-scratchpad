import Head from "next/head";
import RandomImage from "./RandomImage";
import DateObject from "react-date-object";
var date = new DateObject();

export default function Home() {
  return (
    <div>
      <RandomImage query={date.weekDay.name} name="" />
      <RandomImage query={date.month.name} name="" />
      <RandomImage query={date.day} name="" />
      <RandomImage query={date.hour} name="Hours" />
      <RandomImage query={date.minute} name="Minutes" />
      <RandomImage query={date.second} name="Seconds" />
    </div>
  );
}
