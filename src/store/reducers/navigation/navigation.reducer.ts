import {SET_ACTIVE_ITEM} from "../../actions/navigation/navigation.actions-types";

/*const initialState = {
    active_item: undefined,
    items: [{
        className: "home",
        title: "Home",
        path: "/"
    }, {
        className: "person-double",
        id: 'clients'
        title: "Clients",
        sub_links: [{
            title: "Search",
            path: "/clients"
        },{
            title: "Barry Allen",
            path: "/clients/1234/account-summary"
        },{
            title: "John Wayne",
            path: "/clients/2354/account-summary"
        },{
            title: "Tom Cruise",
            path: "/clients/3456/account-summary"
        }]
    }, {
        className: "chart",
        title: "Reports",
        sub_links: [{
            title: "Profits by Year",
            path: "/reports"
        }]
    }, {
        className: "doc-stacked",
        title: "Documents",
        sub_links: [{
            title: "All Documents",
            path: "/documents"
        }]
    }],
    getActive: function(){
        if(!this.active_item) {
            return {
                sub_links: []
            }
        }

        return this.items[this.active_item];
    }
};*/

const initialState = {
    active_item: undefined,
    items: [{
        className: "home",
        title: "Home",
        path: "/"
    }, {
        className: 'person-double',
        id: 'clients',
        title: 'Clients'
    }],
    getActive: function(){
        return this.active_item;
    }
}


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_ITEM:
            state =  {...state, active_item: action.active_item}
    }

    return state;
}