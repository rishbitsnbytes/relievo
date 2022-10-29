import { v4 as uuid } from "uuid";

const btnsData = [
  {
    buttonId: uuid(),
    buttonText: "Primary",
    buttonColor: "#6a6696",
    bgColor: "#212121",
    font: {
      type: "Gruppo",
      color: "#ffffff",
      size: 20,
      weight: 400,
    },
    border: {
      size: 1,
      color: "#6a6696",
      radius: 1,
    },
    padding: {
      vertical: 15,
      horizontal: 30,
    },
    boxShadow: {
      vertical: 0,
      horizontal: 0,
      blurRadius: 2,
      spreadRadius: 1,
      color: "#d7d7d9",
    },
    hover: {
      buttonColor: "#5c4f8c",
      fontColor: "#ffffff",
      borderColor: "#6a6696",
    },
  },
  {
    buttonId: uuid(),
    buttonText: "Secondary",
    buttonColor: "#d4596d",
    bgColor: "#212121",
    font: {
      type: "Gruppo",
      color: "#ffffff",
      size: 20,
      weight: 800,
    },
    border: {
      size: 1,
      color: "#784a52",
      radius: 20,
    },
    padding: {
      vertical: 10,
      horizontal: 30,
    },
    boxShadow: {
      vertical: 0,
      horizontal: 0,
      blurRadius: 10,
      spreadRadius: 0,
      color: "#784a52",
    },
    hover: {
      buttonColor: "#784a52",
      fontColor: "#ffffff",
      borderColor: "#784a52",
    },
  },
  {
    buttonId: uuid(),
    buttonText: "Turquoise",
    buttonColor: "#6ecfdb",
    bgColor: "#212121",
    font: {
      type: "Gruppo",
      color: "#000000",
      size: 30,
      weight: 800,
    },
    border: {
      size: 1,
      color: "#000000",
      radius: 25,
    },
    padding: {
      vertical: 20,
      horizontal: 30,
    },
    boxShadow: {
      vertical: 0,
      horizontal: 5,
      blurRadius: 10,
      spreadRadius: 0,
      color: "#cae5e8",
    },
    hover: {
      buttonColor: "#276873",
      fontColor: "#ffffff",
      borderColor: "#276873",
    },
  },
  {
    buttonId: uuid(),
    buttonText: "Green",
    buttonColor: "#77b55a",
    bgColor: "#212121",
    font: {
      type: "Gruppo",
      color: "#ffffff",
      size: 30,
      weight: 700,
    },
    border: {
      size: 1,
      color: "#4b8f29",
      radius: 4,
    },
    padding: {
      vertical: 10,
      horizontal: 20,
    },
    boxShadow: {
      vertical: 10,
      horizontal: 0,
      blurRadius: 14,
      spreadRadius: -7,
      color: "#3e7327",
    },
    hover: {
      buttonColor: "#72b352",
      fontColor: "#ffffff",
      borderColor: "#4b8f29",
    },
  },
  {
    buttonId: uuid(),
    buttonText: "Light red",
    buttonColor: "#e4685d",
    bgColor: "#212121",
    font: {
      type: "Gruppo",
      color: "#ffffff",
      size: 30,
      weight: 600,
    },
    border: {
      size: 1,
      color: "#ffffff",
      radius: 4,
    },
    padding: {
      vertical: 8,
      horizontal: 20,
    },
    boxShadow: {
      vertical: 39,
      horizontal: 0,
      blurRadius: 0,
      spreadRadius: -24,
      color: "#3e7327",
    },
    hover: {
      buttonColor: "#d94d46",
      fontColor: "#ffffff",
      borderColor: "#ffffff",
    },
  },
  {
    buttonId: uuid(),
    buttonText: "FAB",
    buttonColor: "#7d5d3b",
    bgColor: "#212121",
    font: {
      type: "Gruppo",
      color: "#ffffff",
      size: 18,
      weight: 800,
    },
    border: {
      size: 1,
      color: "#ffffff",
      radius: 30,
    },
    padding: {
      vertical: 22,
      horizontal: 13,
    },
    boxShadow: {
      vertical: 1,
      horizontal: 1,
      blurRadius: 15,
      spreadRadius: 2,
      color: "#a6827e",
    },
    hover: {
      buttonColor: "#634b30",
      fontColor: "#ffffff",
      borderColor: "#ffffff",
    },
  },
  {
    buttonId: uuid(),
    buttonText: "secondary",
    buttonColor: "transparent",
    bgColor: "#212121",
    font: {
      type: "Gruppo",
      color: "#666666",
      size: 30,
      weight: 700,
    },
    border: {
      size: 2,
      color: "#666666",
      radius: 6,
    },
    padding: {
      vertical: 6,
      horizontal: 24,
    },
    boxShadow: {
      vertical: 1,
      horizontal: 1,
      blurRadius: 0,
      spreadRadius: 0,
      color: "#ffffff",
    },
    hover: {
      buttonColor: "#666666",
      fontColor: "#ffffff",
      borderColor: "#ffffff",
    },
  },
  {
    buttonId: uuid(),
    buttonText: "Pill button",
    buttonColor: "#2e466e",
    bgColor: "#212121",
    font: {
      type: "Gruppo",
      color: "#ffffff",
      size: 30,
      weight: 600,
    },
    border: {
      size: 1,
      color: "#1f2f47",
      radius: 20,
    },
    padding: {
      vertical: 20,
      horizontal: 25,
    },
    boxShadow: {
      vertical: 0,
      horizontal: 0,
      blurRadius: 10,
      spreadRadius: 0,
      color: "#44c767",
    },
    hover: {
      buttonColor: "#9bb9f5",
      fontColor: "#ffffff",
      borderColor: "#1f2f47",
    },
  },
];

export { btnsData };
