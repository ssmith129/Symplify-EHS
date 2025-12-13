  export interface sidebarData {
    tittle: string;
    showAsTab: boolean;
    separateRoute: boolean;
    hasSubRoute:boolean;
    menu: menu[];
  }
    export interface menu {
    menuValue: string;
    route?: string;
    hasSubRoute: boolean;
    showSubRoute: boolean;
    icon: string;
    base?: string;
    hasSubRouteTwo?:boolean;
    subMenus?: subMenus[];
    menu?:MenuItem[];
  }

    export interface subMenus {
    showSubRoute: boolean;
    menuValue: string;
    route?:string;
    page?: string;
    subMenusTwo?:any[];
    base?:string;
    customSubmenuTwo?:boolean;
  }
  export interface MenuItem {
    hasSubRoute: boolean;
    hasSubRouteTwo: boolean;
    menuValue: string;
    showSubRoute: boolean;
    menu: SubMenu[];
    base?:string;
  
}

  export interface SubMenu {
    menuValue: string;
    showSubRoute: boolean;
  }

  export interface apiResultFormat {
    data: [];
    totalData: number;
  }

  export interface dataTableData {
    sNo?:number;
    Name: string,
    Position: string,
    Office: string,
    Age: string,
    StartDate: string,
    Salary: string
}