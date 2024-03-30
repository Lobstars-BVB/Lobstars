import { InstagramEmbed } from "react-social-media-embed";

export default function Instagram() {
  return (
    <div className="flex justify-center">
      <InstagramEmbed
        url="https://www.instagram.com/p/CzmTVHsrVxd"
        captioned
        width="100%"
        style={{
          maxWidth: 400,
        }}
      />
    </div>
  );
}
