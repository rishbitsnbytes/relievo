import { initialBoxShadowState } from "contexts";

const boxShadowActionTypes = {
  UPDATE_BOX_ID: "UPDATE_BOX_ID",
  UPDATE_BOX_TEXT: "UPDATE_BOX_TEXT",
  UPDATE_BOX_COLOR: "UPDATE_BOX_COLOR",
  UPDATE_BG_COLOR: "UPDATE_BG_COLOR",
  UPDATE_INSET: "UPDATE_INSET",

  UPDATE_BORDER_SIZE: "UPDATE_BORDER_SIZE",
  UPDATE_BORDER_COLOR: "UPDATE_BORDER_COLOR",
  UPDATE_BORDER_RADIUS: "UPDATE_BORDER_RADIUS",

  UPDATE_BOX_SHADOW_VERTICAL: "UPDATE_BOX_SHADOW_VERTICAL",
  UPDATE_BOX_SHADOW_HORIZONTAL: "UPDATE_BOX_SHADOW_HORIZONTAL",
  UPDATE_BOX_SHADOW_BLUR_RADIUS: "UPDATE_BOX_SHADOW_BLUR_RADIUS",
  UPDATE_BOX_SHADOW_SPREAD_RADIUS: "UPDATE_BOX_SHADOW_SPREAD_RADIUS",
  UPDATE_BOX_SHADOW_COLOR: "UPDATE_BOX_SHADOW_COLOR",

  UPDATE_HOVER_BOX_SHADOW_VERTICAL: "UPDATE_HOVER_BOX_SHADOW_VERTICAL",
  UPDATE_HOVER_BOX_SHADOW_HORIZONTAL: "UPDATE_HOVER_BOX_SHADOW_HORIZONTAL",
  UPDATE_HOVER_BOX_SHADOW_BLUR_RADIUS: "UPDATE_HOVER_BOX_SHADOW_BLUR_RADIUS",
  UPDATE_HOVER_BOX_SHADOW_SPREAD_RADIUS:
    "UPDATE_HOVER_BOX_SHADOW_SPREAD_RADIUS",
  UPDATE_HOVER_BOX_SHADOW_COLOR: "UPDATE_HOVER_BOX_SHADOW_COLOR",

  UPDATE_WHOLE_BOX: "UPDATE_WHOLE_BOX",
};

const boxShadowReducerFunction = (prevBoxShadowState, { type, payload }) => {
  switch (type) {
    case boxShadowActionTypes.UPDATE_BOX_ID: {
      return {
        ...prevBoxShadowState,
        boxId: payload,
      };
    }

    case boxShadowActionTypes.UPDATE_BOX_TEXT: {
      return {
        ...prevBoxShadowState,
        boxText: payload,
      };
    }

    case boxShadowActionTypes.UPDATE_BOX_COLOR: {
      return {
        ...prevBoxShadowState,
        boxColor: payload,
      };
    }

    case boxShadowActionTypes.UPDATE_BG_COLOR: {
      return {
        ...prevBoxShadowState,
        bgColor: payload,
      };
    }

    case boxShadowActionTypes.UPDATE_INSET: {
      console.log("payload", typeof payload);
      const insetValue = payload === "true" ? true : false;
      console.log("insetValue", typeof insetValue);

      return {
        ...prevBoxShadowState,
        inset: insetValue,
      };
    }

    case boxShadowActionTypes.UPDATE_BORDER_SIZE: {
      return {
        ...prevBoxShadowState,
        border: {
          ...prevBoxShadowState.border,
          size: payload,
        },
      };
    }

    case boxShadowActionTypes.UPDATE_BORDER_COLOR: {
      return {
        ...prevBoxShadowState,
        border: {
          ...prevBoxShadowState.border,
          color: payload,
        },
      };
    }

    case boxShadowActionTypes.UPDATE_BORDER_RADIUS: {
      return {
        ...prevBoxShadowState,
        border: {
          ...prevBoxShadowState.border,
          radius: payload,
        },
      };
    }

    case boxShadowActionTypes.UPDATE_BOX_SHADOW_VERTICAL: {
      return {
        ...prevBoxShadowState,
        boxShadow: {
          ...prevBoxShadowState.boxShadow,
          vertical: payload,
        },
      };
    }

    case boxShadowActionTypes.UPDATE_BOX_SHADOW_HORIZONTAL: {
      return {
        ...prevBoxShadowState,
        boxShadow: {
          ...prevBoxShadowState.boxShadow,
          horizontal: payload,
        },
      };
    }

    case boxShadowActionTypes.UPDATE_BOX_SHADOW_BLUR_RADIUS: {
      return {
        ...prevBoxShadowState,
        boxShadow: {
          ...prevBoxShadowState.boxShadow,
          blurRadius: payload,
        },
      };
    }

    case boxShadowActionTypes.UPDATE_BOX_SHADOW_SPREAD_RADIUS: {
      return {
        ...prevBoxShadowState,
        boxShadow: {
          ...prevBoxShadowState.boxShadow,
          spreadRadius: payload,
        },
      };
    }

    case boxShadowActionTypes.UPDATE_BOX_SHADOW_COLOR: {
      return {
        ...prevBoxShadowState,
        boxShadow: {
          ...prevBoxShadowState.boxShadow,
          color: payload,
        },
      };
    }

    case boxShadowActionTypes.UPDATE_HOVER_BOX_SHADOW_VERTICAL: {
      return {
        ...prevBoxShadowState,
        hover: {
          ...prevBoxShadowState.hover,
          vertical: payload,
        },
      };
    }

    case boxShadowActionTypes.UPDATE_HOVER_BOX_SHADOW_HORIZONTAL: {
      return {
        ...prevBoxShadowState,
        hover: {
          ...prevBoxShadowState.hover,
          horizontal: payload,
        },
      };
    }

    case boxShadowActionTypes.UPDATE_HOVER_BOX_SHADOW_BLUR_RADIUS: {
      return {
        ...prevBoxShadowState,
        hover: {
          ...prevBoxShadowState.hover,
          blurRadius: payload,
        },
      };
    }

    case boxShadowActionTypes.UPDATE_HOVER_BOX_SHADOW_SPREAD_RADIUS: {
      return {
        ...prevBoxShadowState,
        hover: {
          ...prevBoxShadowState.hover,
          spreadRadius: payload,
        },
      };
    }

    case boxShadowActionTypes.UPDATE_HOVER_BOX_SHADOW_COLOR: {
      return {
        ...prevBoxShadowState,
        hover: {
          ...prevBoxShadowState.hover,
          color: payload,
        },
      };
    }

    case boxShadowActionTypes.UPDATE_WHOLE_BOX: {
      return {
        ...prevBoxShadowState,
        ...payload,
      };
    }

    default: {
      return {
        ...initialBoxShadowState,
      };
    }
  }
};

export { boxShadowReducerFunction };
