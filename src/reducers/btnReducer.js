import { initialBtnState } from "contexts";

const btnActionTypes = {
  UPDATE_BUTTON_ID: "UPDATE_BUTTON_ID",
  UPDATE_BUTTON_TEXT: "UPDATE_BUTTON_TEXT",
  UPDATE_BUTTON_COLOR: "UPDATE_BUTTON_COLOR",
  UPDATE_BG_COLOR: "UPDATE_BG_COLOR",
  UPDATE_FONT_TYPE: "UPDATE_FONT_TYPE",
  UPDATE_FONT_COLOR: "UPDATE_FONT_COLOR",
  UPDATE_FONT_SIZE: "UPDATE_FONT_SIZE",
  UPDATE_FONT_WEIGHT: "UPDATE_FONT_WEIGHT",
  UPDATE_BORDER_SIZE: "UPDATE_BORDER_SIZE",
  UPDATE_BORDER_COLOR: "UPDATE_BORDER_COLOR",
  UPDATE_BORDER_RADIUS: "UPDATE_BORDER_RADIUS",
  UPDATE_PADDING_VERTICAL: "UPDATE_PADDING_VERTICAL",
  UPDATE_PADDING_HORIZONTAL: "UPDATE_PADDING_HORIZONTAL",
  UPDATE_BOX_SHADOW_VERTICAL: "UPDATE_BOX_SHADOW_VERTICAL",
  UPDATE_BOX_SHADOW_HORIZONTAL: "UPDATE_BOX_SHADOW_HORIZONTAL",
  UPDATE_BOX_SHADOW_BLUR_RADIUS: "UPDATE_BOX_SHADOW_BLUR_RADIUS",
  UPDATE_BOX_SHADOW_SPREAD_RADIUS: "UPDATE_BOX_SHADOW_SPREAD_RADIUS",
  UPDATE_BOX_SHADOW_COLOR: "UPDATE_BOX_SHADOW_COLOR",
  UPDATE_HOVER_BUTTON_COLOR: "UPDATE_HOVER_BUTTON_COLOR",
  UPDATE_HOVER_FONT_COLOR: "UPDATE_HOVER_FONT_COLOR",
  UPDATE_HOVER_BORDER_COLOR: "UPDATE_HOVER_BORDER_COLOR",
  UPDATE_WHOLE_BUTTON: "UPDATE_WHOLE_BUTTON",
};

const btnReducerFunction = (prevBtnState, { type, payload }) => {
  switch (type) {
    case btnActionTypes.UPDATE_BUTTON_ID: {
      return {
        ...prevBtnState,
        buttonId: payload,
      };
    }

    case btnActionTypes.UPDATE_BUTTON_TEXT: {
      return {
        ...prevBtnState,
        buttonText: payload,
      };
    }

    case btnActionTypes.UPDATE_BUTTON_COLOR: {
      return {
        ...prevBtnState,
        buttonColor: payload,
      };
    }

    case btnActionTypes.UPDATE_BG_COLOR: {
      return {
        ...prevBtnState,
        bgColor: payload,
      };
    }

    case btnActionTypes.UPDATE_FONT_TYPE: {
      return {
        ...prevBtnState,
        font: {
          ...prevBtnState.font,
          type: payload,
        },
      };
    }

    case btnActionTypes.UPDATE_FONT_COLOR: {
      return {
        ...prevBtnState,
        font: {
          ...prevBtnState.font,
          color: payload,
        },
      };
    }

    case btnActionTypes.UPDATE_FONT_SIZE: {
      return {
        ...prevBtnState,
        font: {
          ...prevBtnState.font,
          size: payload,
        },
      };
    }

    case btnActionTypes.UPDATE_FONT_WEIGHT: {
      return {
        ...prevBtnState,
        font: {
          ...prevBtnState.font,
          weight: payload,
        },
      };
    }

    case btnActionTypes.UPDATE_BORDER_SIZE: {
      return {
        ...prevBtnState,
        border: {
          ...prevBtnState.border,
          size: payload,
        },
      };
    }

    case btnActionTypes.UPDATE_BORDER_COLOR: {
      return {
        ...prevBtnState,
        border: {
          ...prevBtnState.border,
          color: payload,
        },
      };
    }

    case btnActionTypes.UPDATE_BORDER_RADIUS: {
      return {
        ...prevBtnState,
        border: {
          ...prevBtnState.border,
          radius: payload,
        },
      };
    }

    case btnActionTypes.UPDATE_PADDING_VERTICAL: {
      return {
        ...prevBtnState,
        padding: {
          ...prevBtnState.padding,
          vertical: payload,
        },
      };
    }

    case btnActionTypes.UPDATE_PADDING_HORIZONTAL: {
      return {
        ...prevBtnState,
        padding: {
          ...prevBtnState.padding,
          horizontal: payload,
        },
      };
    }

    case btnActionTypes.UPDATE_BOX_SHADOW_VERTICAL: {
      return {
        ...prevBtnState,
        boxShadow: {
          ...prevBtnState.boxShadow,
          vertical: payload,
        },
      };
    }

    case btnActionTypes.UPDATE_BOX_SHADOW_HORIZONTAL: {
      return {
        ...prevBtnState,
        boxShadow: {
          ...prevBtnState.boxShadow,
          horizontal: payload,
        },
      };
    }

    case btnActionTypes.UPDATE_BOX_SHADOW_BLUR_RADIUS: {
      return {
        ...prevBtnState,
        boxShadow: {
          ...prevBtnState.boxShadow,
          blurRadius: payload,
        },
      };
    }

    case btnActionTypes.UPDATE_BOX_SHADOW_SPREAD_RADIUS: {
      return {
        ...prevBtnState,
        boxShadow: {
          ...prevBtnState.boxShadow,
          spreadRadius: payload,
        },
      };
    }

    case btnActionTypes.UPDATE_BOX_SHADOW_COLOR: {
      return {
        ...prevBtnState,
        boxShadow: {
          ...prevBtnState.boxShadow,
          color: payload,
        },
      };
    }

    case btnActionTypes.UPDATE_HOVER_BUTTON_COLOR: {
      return {
        ...prevBtnState,
        hover: {
          ...prevBtnState.hover,
          buttonColor: payload,
        },
      };
    }

    case btnActionTypes.UPDATE_HOVER_FONT_COLOR: {
      return {
        ...prevBtnState,
        hover: {
          ...prevBtnState.hover,
          fontColor: payload,
        },
      };
    }

    case btnActionTypes.UPDATE_HOVER_BORDER_COLOR: {
      return {
        ...prevBtnState,
        hover: {
          ...prevBtnState.hover,
          borderColor: payload,
        },
      };
    }

    case btnActionTypes.UPDATE_WHOLE_BUTTON: {
      return {
        ...prevBtnState,
        ...payload,
      };
    }

    default: {
      return {
        ...initialBtnState,
      };
    }
  }
};

export { btnReducerFunction };
