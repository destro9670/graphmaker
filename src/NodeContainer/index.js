import jobIcon from "../assets/icons/u_bag-alt.svg";
import vehicleIcon from "../assets/icons/u_car-sideview.svg";
import emailIcon from "../assets/icons/u_envelope-alt.svg";
import locationIcon from "../assets/icons/u_location-point.svg";
import userIcon from "../assets/icons/u_user.svg";
import familyIcon from "../assets/icons/u_users-alt.svg";
const categoryIcons = {
  Job: jobIcon,
  Vehicle: vehicleIcon,
  Email: emailIcon,
  Location: locationIcon,
  User: userIcon,
  Family: familyIcon,
};

const colors = {
  Job: "#60A62E",
  Vehicle: "#6F4599",
  Email: "#FBCF1D",
  Location: "#22ADAC",
  User: "#45679D",
  Family: "#E86951",
};

const getNodeType = (category) => {
  return {
    data: { icon: categoryIcons[category] },
    style: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: "#F6F6F6",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: `2px solid ${colors[category]}`,
      backgroundSize: "cover",
      backgroundOrigin: "border-box",
    },
    targetPosition: "left",
    sourcePosition: "right",
  };
};

export { categoryIcons, getNodeType, colors, userIcon };
