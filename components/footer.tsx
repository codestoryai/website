import Image from "next/image";
import { AiFillSlackCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <Container>
        <div className="py-12 flex flex-row items-center">
          <div className="py-4">
            <Image
              src="/assets/logos/cs-logomark.svg"
              width={60}
              height={60}
              alt="CodeStory Logo"
            />
          </div>
          <div className="grow">
            <div className="flex gap-4 float-right align-middle">
              <p className="text-lg">Follow us on</p>
              <a
                href="https://twitter.com/codestoryai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={32} color="#26a7de" />
              </a>
              <a
                href="https://www.linkedin.com/company/codestory-ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin size={32} color="#2d64bc" />
              </a>
              <a
                href="https://join.slack.com/t/codestoryai/shared_invite/zt-1x4zy3mk1-9fL5k~7XGSNNku7~iYr51w"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillSlackCircle size={32} color="#2d64bc" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
