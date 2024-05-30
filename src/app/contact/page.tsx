import { ContactForm } from "@/app/contact/_components/contact-form";
import { myAddress, myEmail, myPhone } from "@/config";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { IoHomeOutline, IoMailOutline } from "react-icons/io5";

import ImageDark from "@/../public/contact/illustration-dark.svg";
import ImageLight from "@/../public/contact/illustration-light.svg";
import { Container } from "@/components/container";
import { PageNavigation } from "@/components/page-navigation";

const ContactPage = () => {
  return (
    <Container className="grid h-full items-center gap-x-8 gap-y-16 md:grid-cols-2">
      <div className="max-w-[350px] space-y-2 md:mx-auto">
        <div className="flex flex-wrap items-center gap-1">
          <span className="h-[2px] w-6 bg-primary" />
          <p>Say Hello</p>
          <span>👋</span>
        </div>
        <h1 className="text-6xl font-bold ">
          Let&apos;s <span className="text-primary">Work</span> Together
          <span className="text-primary">.</span>
        </h1>
        <p className="text-muted-foreground">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae,
          facere!
        </p>
      </div>
      <div className="relative order-first mx-auto max-w-[350px] sm:max-w-max md:order-[initial]">
        <Image
          src={ImageLight}
          alt="Illustration"
          width={470}
          height={370}
          className="mx-auto dark:hidden"
        />
        <Image
          src={ImageDark}
          alt="Illustration"
          width={470}
          height={370}
          className="mx-auto hidden dark:block"
        />
      </div>
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <IoMailOutline className="h-5 w-5 text-primary" />
          {myEmail}
        </div>
        <div className="flex items-center gap-3">
          <IoHomeOutline className="h-5 w-5 text-primary" />
          {myAddress}
        </div>
        <div className="flex items-center gap-3">
          <FaPhone className="h-5 w-5 text-primary" />
          {myPhone}
        </div>
      </div>
      <ContactForm />
      <PageNavigation previousPageLabel="Skills" previousPageUrl="/skills" />
    </Container>
  );
};

export default ContactPage;
