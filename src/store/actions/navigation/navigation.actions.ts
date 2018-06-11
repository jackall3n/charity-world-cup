import {SET_ACTIVE_ITEM} from "./navigation.actions-types";

export function setActiveItem(active_item) {
    return {
        type: SET_ACTIVE_ITEM,
        active_item
    }
}

export const navigation = {
    set_active: setActiveItem
};