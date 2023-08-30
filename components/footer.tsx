"use client";
import { faFacebook, faInstagram, faInstagramSquare, faMailchimp, faSquareFacebook, faSquareXTwitter, faWhatsapp, faWhatsappSquare, faXTwitter, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GroupIcon, InfoIcon, LocateIcon, MailIcon, MailOpen, MailXIcon, MailboxIcon, Mails } from "lucide-react";

export const revalidate = 0;
const Footer = () => {
  return (
    <footer className="bg-[#36990b] border-t  ">
      <div className="mx-auto py-10 border-b-2">
        <p className="text-center text-white" >&copy;All Rights Reserved | Dawaduniya.com</p>
      </div>
      <div className="text-2xl w-full text-center font-bold text-white ">Follow us</div>
        <div className="flex justify-center border-b space-x-3 items-center">
          <a href="https://instagram.com/dawaduniya?igshid=MzRlODBiNWFlZA=="><FontAwesomeIcon size="2x" color="white" icon={faInstagramSquare}/></a>
          <a href="https://twitter.com/dawaduniya"><FontAwesomeIcon size="2x" color="white" icon={faSquareXTwitter}/></a>
          <a href="https://wa.me/+919354227521?text=I%20want%20to%20know%20more%20about%20healthcare%20services%20offered%20by%20DawaDuniya.%20"><FontAwesomeIcon size="2x" color="white" icon={faWhatsappSquare}/></a>
          <a href="https://youtube.com/@Dawa_Duniya?si=_lKGeYe8E2TAuifR"><FontAwesomeIcon size="2x" color="white" icon={faYoutubeSquare}/></a>
          <a href="https://www.facebook.com/profile.php?id=61550863916779&mibextid=ZbWKwL"><FontAwesomeIcon size="2x" color="white" icon={faSquareFacebook}/></a>
          <a href=""><Mails color="white" size={40}/></a>
        </div>
      <div className="flex space-x-2 text-white mt-6">
        <div className="social border-r border-white md:w-3/4">
            <h1 className="text-xl font-bold text-center w-full">  <InfoIcon  className="inline"/> About Us</h1>
            <p className="px-3 items-center">
            Dawa Duniya is a group of youngsters coming from various professions such as: pharmacists, and doctors who have joined forces to serve mankind. Our shared goal is to provide access to quality healthcare and education. By combining our skills, we aim to make a greater impact than working alone. Our team is a shining example of the positive change that can come from collaboration and teamwork.
            </p>
        </div>
        <div className="pb-6 md:w-1/4">
            <h1 className=" text-xl font-bold text-center w-full"> <LocateIcon className="inline"/> Address</h1>
            <p className="px-3 items-center">
            743, Nishant Colony, Pavi Sadakpur, Loni,<br /> Ghaziabad, <br />
            Uttar Pradesh- 201102
            </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
