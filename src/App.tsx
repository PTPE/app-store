import AppList from "./components/AppList";
import RecommandAppList from "./components/RecommandAppList";

const dummyRecommandAppList = [
  {
    name: "ChatGPT",
    iconUrl: {
      sm: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/04/10/e5/0410e5ff-41cd-88cd-fc10-71d57eeca090/AppIcon-0-0-1x_U007epad-0-0-0-1-0-85-220.png/53x53bb.png",
      md: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/04/10/e5/0410e5ff-41cd-88cd-fc10-71d57eeca090/AppIcon-0-0-1x_U007epad-0-0-0-1-0-85-220.png/75x75bb.png",
      lg: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/04/10/e5/0410e5ff-41cd-88cd-fc10-71d57eeca090/AppIcon-0-0-1x_U007epad-0-0-0-1-0-85-220.png/100x100bb.png",
    },
    link: "https://apps.apple.com/tw/app/chatgpt/id6448311069?uo=2",
    category: "生產力工具",
    id: "6448311069",
  },
  {
    name: "Notion",
    iconUrl: {
      sm: "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/7b/4a/1d/7b4a1d1f-2e72-2787-5762-dc2c02a9e8ed/AppIcon-0-0-1x_U007epad-0-0-0-1-0-85-220.png/53x53bb.png",
      md: "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/7b/4a/1d/7b4a1d1f-2e72-2787-5762-dc2c02a9e8ed/AppIcon-0-0-1x_U007epad-0-0-0-1-0-85-220.png/75x75bb.png",
      lg: "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/7b/4a/1d/7b4a1d1f-2e72-2787-5762-dc2c02a9e8ed/AppIcon-0-0-1x_U007epad-0-0-0-1-0-85-220.png/100x100bb.png",
    },
    link: "https://apps.apple.com/tw/app/notion/id1232780281?uo=2",
    category: "生產力工具",
    id: "1232780281",
  },
  {
    name: "Spotify",
    iconUrl: {
      sm: "https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/f3/1a/36/f31a36ea-3e76-4cc1-0d35-d8e4f3e6de8f/AppIcon-0-0-1x_U007epad-0-0-0-1-0-85-220.png/53x53bb.png",
      md: "https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/f3/1a/36/f31a36ea-3e76-4cc1-0d35-d8e4f3e6de8f/AppIcon-0-0-1x_U007epad-0-0-0-1-0-85-220.png/75x75bb.png",
      lg: "https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/f3/1a/36/f31a36ea-3e76-4cc1-0d35-d8e4f3e6de8f/AppIcon-0-0-1x_U007epad-0-0-0-1-0-85-220.png/100x100bb.png",
    },
    link: "https://apps.apple.com/tw/app/spotify/id324684580?uo=2",
    category: "音樂",
    id: "324684580",
  },
  {
    name: "Instagram",
    iconUrl: {
      sm: "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/60/4c/56/604c5615-9b32-d842-2f58-67ac7d2e10e1/AppIcon-0-0-1x_U007epad-0-0-0-1-0-85-220.png/53x53bb.png",
      md: "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/60/4c/56/604c5615-9b32-d842-2f58-67ac7d2e10e1/AppIcon-0-0-1x_U007epad-0-0-0-1-0-85-220.png/75x75bb.png",
      lg: "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/60/4c/56/604c5615-9b32-d842-2f58-67ac7d2e10e1/AppIcon-0-0-1x_U007epad-0-0-0-1-0-85-220.png/100x100bb.png",
    },
    link: "https://apps.apple.com/tw/app/instagram/id389801252?uo=2",
    category: "社交",
    id: "389801252",
  },
  {
    name: "Evernote",
    iconUrl: {
      sm: "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/76/ee/65/76ee6529-9b8e-d5a1-34e1-49c870ee28da/AppIcon-0-0-1x_U007epad-0-0-0-1-0-85-220.png/53x53bb.png",
      md: "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/76/ee/65/76ee6529-9b8e-d5a1-34e1-49c870ee28da/AppIcon-0-0-1x_U007epad-0-0-0-1-0-85-220.png/75x75bb.png",
      lg: "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/76/ee/65/76ee6529-9b8e-d5a1-34e1-49c870ee28da/AppIcon-0-0-1x_U007epad-0-0-0-1-0-85-220.png/100x100bb.png",
    },
    link: "https://apps.apple.com/tw/app/evernote/id281796108?uo=2",
    category: "生產力工具",
    id: "281796108",
  },
];

function App() {
  return (
    <div className="flex flex-col">
      <div className="py-3 bg-gray-100 w-full text-center border-b-[1px] border-gray-300">
        <input
          type="text"
          placeholder="搜尋"
          className="placeholder:text-center bg-gray-300 rounded-[5px] py-1 px-2"
        />
      </div>

      <section className="border-b-[1px] border-gray-300 p-2 space-y-2">
        <h2 className="font-semibold text-2xl">推薦</h2>
        <RecommandAppList recommandAppList={dummyRecommandAppList} />
      </section>

      <section className="p-2">
        <AppList />
      </section>
    </div>
  );
}

export default App;
