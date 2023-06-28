import { MdOutlineCampaign, MdOutlineFiberNew, MdAccountCircle, MdPaid } from "react-icons/md";
export const linksSidebar = [
    // {
    //   label: "My Account",
    //   route: "/pages/perfil/profile",
    //   icon: <MdAccountCircle />,
    // },
    // {
    //   label: "Donator",
    //   route: "#",
    //   icon: <MdPaid />,
    // },
    {
      label: "User Campaigns",
      route: "/pages/usercampaigns",
      icon: <MdOutlineCampaign />,
    },
    {
      label: "New Campaigns",
      route: "/pages/perfil/newcampaigns",
      icon: <MdOutlineFiberNew />,
    },
  ];