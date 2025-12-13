import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiResultFormat, menu, MenuItem, sidebarData } from '../models/sidebar.model';
import { AllRoutes } from '../routes/routes';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}
  public getDataTable() {
    return this.http.get<apiResultFormat>('assets/json/data-tables.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
    public sidebarData:sidebarData[] = [
    {
      tittle: 'MAIN',
      showAsTab: false,
      separateRoute: false,
      hasSubRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'layout-board',
          base: 'index',
          route:AllRoutes.index,
        },
        {
          menuValue: 'Applications',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'apps',
          base: 'application',
          subMenus:[
            {
              menuValue:'Chat',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'chat',
              route:AllRoutes.chat,
            },
            {
              menuValue: 'Calls',
              customSubmenuTwo: true,
              showSubRoute: false,
              page:'calls',
              subMenusTwo: [
                {
                  menuValue: 'Voice Call',
                  route: AllRoutes.voiceCall,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'voice-call',
                },
                {
                  menuValue: 'Video Call',
                  route: AllRoutes.videoCall,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'video-call',
                },
                
              ],
            },
            {
              menuValue:'Calendar',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'calendar',
              route:AllRoutes.calendar,
            },
            {
              menuValue:'Email',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'email',
              route:AllRoutes.email,
            },
            {
              menuValue:'Contacts',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'contacts',
              route:AllRoutes.contacts,
            },
            {
              menuValue: 'Invoices',
              customSubmenuTwo: true,
              showSubRoute: false,
              page:'invoice',
              subMenusTwo: [
                {
                  menuValue: 'Invoice',
                  route: AllRoutes.invoiceList,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'invoice',
                },
                {
                  menuValue: 'Invoice Details',
                  route: AllRoutes.invoiceDetails,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'invoice-details',
                },
              ],
            },
            {
              menuValue:'To Do',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'todo',
              route:AllRoutes.todo,
            },
            {
              menuValue:'Notes',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'notes',
              route:AllRoutes.notes,
            },
            {
              menuValue:'Kanban Boards',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'kanban-boards',
              route:AllRoutes.kanbanView,
            },
            {
              menuValue:'File Manager',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'file-manager',
              route:AllRoutes.fileManager,
            },
            {
              menuValue:'Social Feed',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'social-feed',
              route:AllRoutes.socialFeed,
            },
            {
              menuValue:'Search Result',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'search-result',
              route:AllRoutes.searchResult,
            },
          ]
        },
        {
          menuValue: 'Layouts',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'layout-kanban',
          base: 'layout',
          subMenus:[
            {
              menuValue:'Mini',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'layout-mini',
              route:AllRoutes.layoutMini,
            },
            {
              menuValue:'Hover View',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'layout-hoverview',
              route:AllRoutes.layoutHoverview,
            },
            {
              menuValue:'Hidden',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'layout-hidden',
              route:AllRoutes.layoutHidden,
            },
            {
              menuValue:'Full Width',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'layout-fullwidth',
              route:AllRoutes.layoutFullwidth,
            },
            {
              menuValue:'RTL',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'layout-rtl',
              route:AllRoutes.layoutRtl,
            },
            {
              menuValue:'Dark',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'layout-dark',
              route:AllRoutes.layoutDark,
            },
          ]
        },
      ]
 
    },
    {
      tittle: 'HEALTH CARE',
      showAsTab: false,
      separateRoute: false,
      hasSubRoute: false,
      menu: [
        {
          menuValue: 'Patients',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'users',
          base: 'patients',
          subMenus:[
            {
              menuValue: 'Patients',
              customSubmenuTwo: false,
              showSubRoute: false,
              base: 'patients',
              route:AllRoutes.patients,
            },
            {
              menuValue: 'Patient Search',
              customSubmenuTwo: false,
              showSubRoute: false,
              base: 'patient-search',
              route:AllRoutes.patientSearch,
            }
          ]
        },
        {
          menuValue: 'Doctors',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'stethoscope',
          base: 'doctors',
          route:AllRoutes.doctors,
        },
        {
          menuValue: 'Requests',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'calendar-question',
          base: 'requests',
          route:AllRoutes.requests,
        },
        {
          menuValue: 'Appoinments',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'calendar-time',
          base: 'appointments',
          subMenus:[
            {
              menuValue: 'Calendar',
              customSubmenuTwo: false,
              showSubRoute: false,
              base: 'appointment-calendar',
              route:AllRoutes.appointmentCalendar,
            },
            {
              menuValue: 'Appointments',
              customSubmenuTwo: false,
              showSubRoute: false,
              base: 'appointment',
              route:AllRoutes.appointments,
            },
            {
              menuValue: 'Consultation',
              customSubmenuTwo: false,
              showSubRoute: false,
              base: 'appointment-consultation',
              route:AllRoutes.appointmentConsultation,
            },
            {
              menuValue: 'Transactions',
              customSubmenuTwo: false,
              showSubRoute: false,
              base: 'transactions',
              route:AllRoutes.transactions,
            },
          ]
        },
        {
          menuValue: 'Visits',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'e-passport',
          base: 'visits',
          route:AllRoutes.visits,
        },
        {
          menuValue: 'Laboratory',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'test-pipe',
          base: 'laboratory',
          subMenus:[
            {
              menuValue: 'Lab Results',
              customSubmenuTwo: false,
              showSubRoute: false,
              base: 'lab-results',
              route:AllRoutes.labResults,
            },
            {
              menuValue: 'Medical Results',
              customSubmenuTwo: false,
              showSubRoute: false,
              base: 'medical-results',
              route:AllRoutes.medicalResults,
            }
          ]
        },
        {
          menuValue: 'Pharmacy',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'prescription',
          base: 'pharmacy',
          route:AllRoutes.pharmacy,
        },
       
      ]
 
    },
    {
      tittle: 'MANAGE',
      showAsTab: false,
      separateRoute: false,
      hasSubRoute: false,
      menu: [
        {
          menuValue: 'Staffs',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'users-group',
          base: 'staffs',
          route:AllRoutes.staff,
        },
        {
          menuValue: 'Notifications',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'bell',
          base: 'notifications',
          route:AllRoutes.notifications,
        },
        {
          menuValue: 'Settings',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'settings',
          base: 'settings',
          route:AllRoutes.generalSettings,
        },
        
       
      ]
 
    },
    {
      tittle: 'PAGES',
      showAsTab: false,
      separateRoute: false,
      hasSubRoute: false,
      menu: [
        {
          menuValue: 'Authentication',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'lock-square-rounded',
          base: 'authentication',
          subMenus:[
            {
              menuValue:'Login',
              showSubRoute:false,
              customSubmenuTwo:false,
              base:'login',
              route:AllRoutes.login,
            },
            {
              menuValue:'Sign Up',
              showSubRoute:false,
              customSubmenuTwo:false,
              base:'sign-up',
              route:AllRoutes.signUp,
            },
            {
              menuValue:'Forgot Password',
              showSubRoute:false,
              customSubmenuTwo:false,
              base:'forgot-password',
              route:AllRoutes.forgotPassword,
            },
            {
              menuValue:'Change Password',
              showSubRoute:false,
              customSubmenuTwo:false,
              base:'change-password',
              route:AllRoutes.changePassword,
            },
            {
              menuValue:'Lock Screen',
              showSubRoute:false,
              customSubmenuTwo:false,
              base:'lock-screen',
              route:AllRoutes.lockScreen,
            }
          ]  
        },
        {
          menuValue: 'Error Pages',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'face-id-error',
          base: 'error-pages',
          subMenus:[
            {
              menuValue:'Error 404',
              showSubRoute:false,
              customSubmenuTwo:false,
              base:'error-404',
              route:AllRoutes.error404,
            },
            {
              menuValue:'Error 500',
              showSubRoute:false,
              customSubmenuTwo:false,
              base:'error-500',
              route:AllRoutes.error500,
            },
            
          ]  
        },
        {
          menuValue: 'Other Pages',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'files',
          base: 'pages',
          subMenus:[
            {
              menuValue:'Starter Page',
              showSubRoute:false,
              customSubmenuTwo:false,
              base:'starter-page',
              route:AllRoutes.starterPage,
            },
            {
              menuValue:'Coming Soon',
              showSubRoute:false,
              customSubmenuTwo:false,
              base:'coming-soon',
              route:AllRoutes.comingSoon,
            },
            {
              menuValue:'Under Maintenance',
              showSubRoute:false,
              customSubmenuTwo:false,
              base:'under-maintenance',
              route:AllRoutes.underMaintenance,
            },
            {
              menuValue:'Privacy Policy',
              showSubRoute:false,
              customSubmenuTwo:false,
              base:'privacy-policy',
              route:AllRoutes.privacyPolicy,
            },
            {
              menuValue:'Terms & Conditions',
              showSubRoute:false,
              customSubmenuTwo:false,
              base:'terms-and-conditions',
              route:AllRoutes.termsAndConditions,
            },
            
          ]  
        },
        
       
      ]
 
    },
    {
      tittle: 'UI INTERFACE',
      showAsTab: false,
      separateRoute: false,
      hasSubRoute: false,
      menu: [
        {
          menuValue: 'Base UI',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'hierarchy',
          base: 'base-ui',
          subMenus:[
            {
              menuValue:'Accordion',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-accordion',
              route:AllRoutes.uiAccordion,
            },
            {
              menuValue:'Alert',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-alerts',
              route:AllRoutes.uiAlerts,
            },
            {
              menuValue:'Avatar',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-avatar',
              route:AllRoutes.uiAvatar,
            },
            {
              menuValue:'Badges',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-badges',
              route:AllRoutes.uiBadges,
            },
            {
              menuValue:'Breadcrumb',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-breadcrumb',
              route:AllRoutes.uiBreadcrumb,
            },
            {
              menuValue:'Buttons',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-buttons',
              route:AllRoutes.uiButtons,
            },
            {
              menuValue:'Buttons Group',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-buttons-group',
              route:AllRoutes.uiButtonsGroup,
            },
            {
              menuValue:'Card',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-cards',
              route:AllRoutes.uiCards,
            },
            {
              menuValue:'Carousel',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-carousel',
              route:AllRoutes.uiCarousel,
            },
            {
              menuValue:'Collapse',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-collapse',
              route:AllRoutes.uiCollapse,
            },
            {
              menuValue:'Dropdowns',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-dropdowns',
              route:AllRoutes.uiDropdowns,
            },
            {
              menuValue:'Ratio',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-ratio',
              route:AllRoutes.uiRatio,
            },
            {
              menuValue:'Grid',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-grid',
              route:AllRoutes.uiGrid,
            },
            {
              menuValue:'Images',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-images',
              route:AllRoutes.uiImages,
            },
            {
              menuValue:'Links',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-links',
              route:AllRoutes.uiLinks,
            },
            {
              menuValue:'List Group',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-list-group',
              route:AllRoutes.uiListGroup,
            },
            {
              menuValue:'Modals',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-modals',
              route:AllRoutes.uiModals,
            },
            {
              menuValue:'Offcanvas',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-offcanvas',
              route:AllRoutes.uiOffcanvas,
            },
            {
              menuValue:'Pagination',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-pagination',
              route:AllRoutes.uiPagination,
            },
            {
              menuValue:'Placeholders',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-placeholders',
              route:AllRoutes.uiPlaceholders,
            },
            {
              menuValue:'Popovers',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-popovers',
              route:AllRoutes.uiPopovers,
            },
            {
              menuValue:'Progress',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-progress',
              route:AllRoutes.uiProgress,
            },
            {
              menuValue:'Scrollspy',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-scrollspy',
              route:AllRoutes.uiScrollspy,
            },
            {
              menuValue:'Spinner',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-spinner',
              route:AllRoutes.uiSpinner,
            },
            {
              menuValue:'Tabs',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-nav-tabs',
              route:AllRoutes.uiTabs,
            },
            {
              menuValue:'Toasts',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-toasts',
              route:AllRoutes.uiToasts,
            },
            {
              menuValue:'Tooltips',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-tooltips',
              route:AllRoutes.uiTooltips,
            },
            {
              menuValue:'Typography',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-typography',
              route:AllRoutes.uiTypography,
            },
            {
              menuValue:'Utilities',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-utilities',
              route:AllRoutes.uiUtilities,
            },
          ]
        },
        {
          menuValue: 'Advanced UI',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'whirl',
          base: 'advanced-ui',
          subMenus:[
            {
              menuValue:'Drag Drop',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-drag-drop',
              route:AllRoutes.uiDragDrop,
            },
            {
              menuValue:'Clipboard',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-clipboard',
              route:AllRoutes.uiClipboard,
            },
            {
              menuValue:'Range Slider',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-range-slider',
              route:AllRoutes.uiRangeSlider,
            },
            {
              menuValue:'Lightbox',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-lightbox',
              route:AllRoutes.uiLightbox,
            },
            {
              menuValue:'Rating',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-rating',
              route:AllRoutes.uiRating,
            },
            {
              menuValue:'Scrollbar',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'ui-scrollbar',
              route:AllRoutes.uiScrollbar,
            },
           
          ]
        },
        {
          menuValue: 'Forms',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'forms',
          base: 'forms',
          subMenus:[
            {
              menuValue:'Form Element',
              showSubRoute:false,
              customSubmenuTwo:true,
              page:'form-element',
              subMenusTwo:[
                {
                  menuValue: 'Basic Inputs',
                  route: AllRoutes.formBasicInputs,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'form-basic-inputs',
                },
                {
                  menuValue: 'Checkbox & Radios',
                  route: AllRoutes.formCheckboxRadios,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'form-checkbox-radios',
                },
                {
                  menuValue: 'Input Groups',
                  route: AllRoutes.formInputGroups,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'form-input-groups',
                },
                {
                  menuValue: 'Grid & Gutters',
                  route: AllRoutes.formGridGutters,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'form-grid-gutters',
                },
                {
                  menuValue: 'Input Masks',
                  route: AllRoutes.formMask,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'form-mask',
                },
                {
                  menuValue: 'File Uploads',
                  route: AllRoutes.formFileupload,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'form-fileupload',
                },
              ]
            },
            {
              menuValue:'Layouts',
              showSubRoute:false,
              customSubmenuTwo:true,
              page:'layouts',
              subMenusTwo:[
                {
                  menuValue: 'Horizontal',
                  route: AllRoutes.formHorizontal,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'form-horizontal',
                },
                {
                  menuValue: 'Vertical',
                  route: AllRoutes.formVertical,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'form-vertical',
                },
                {
                  menuValue: 'Floating Labels',
                  route: AllRoutes.formFloatingLabels,
                  hasSubRoute: false,
                  showSubRoute: false,
                  base: 'form-floating-labels',
                },
                
              ]
            },
            {
              menuValue:'Form Validation',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'form-validation',
              route:AllRoutes.formValidation,
            },
            {
              menuValue:'Form Select',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'form-select',
              route:AllRoutes.formSelect,
            },
            {
              menuValue:'Form Wizard',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'form-wizard',
              route:AllRoutes.formWizard,
            },
            {
              menuValue:'Form Pickers',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'form-pickers',
              route:AllRoutes.formPickers,
            },
            {
              menuValue:'Form Editors',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'form-editors',
              route:AllRoutes.formEditors,
            },
           
          ]
        },
        {
          menuValue: 'Tables',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'table',
          base: 'tables',
          subMenus:[
            {
              menuValue:'Basic Tables',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'tables-basic',
              route:AllRoutes.tablesBasic,
            },
            {
              menuValue:'Data Tables',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'data-tables',
              route:AllRoutes.dataTables,
            },
          ]
        },
        {
          menuValue: 'Charts',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'chart-pie-3',
          base: 'chart',
          subMenus:[
            {
              menuValue:'Apex Charts',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'chart-apex',
              route:AllRoutes.chartApex,
            },
            {
              menuValue:'PrimeNG',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'prime-ng',
              route:AllRoutes.primeNG,
            },
           
          ]
        },
        {
          menuValue: 'Icons',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'icons',
          base: 'icons',
          subMenus:[
            {
              menuValue:'Fontawesome Icons',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'icon-fontawesome',
              route:AllRoutes.iconFontawesome,
            },
            {
              menuValue:'Tabler Icons',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'icon-tabler',
              route:AllRoutes.iconTabler,
            },
            {
              menuValue:'Bootstrap Icons',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'icon-bootstrap',
              route:AllRoutes.iconBootstrap,
            },
            {
              menuValue:'Remix Icons',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'icon-remix',
              route:AllRoutes.iconRemix,
            },
            {
              menuValue:'Feather Icons',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'icon-feather',
              route:AllRoutes.iconFeather,
            },
            {
              menuValue:'Ionic Icons',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'icon-ionic',
              route:AllRoutes.iconIonic,
            },
            {
              menuValue:'Material Icons',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'icon-material',
              route:AllRoutes.iconMaterial,
            },
            {
              menuValue:'Pe7 Icons',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'icon-pe7',
              route:AllRoutes.iconPe7,
            },
            {
              menuValue:'Simpleline Icons',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'icon-simpleline',
              route:AllRoutes.iconSimpleline,
            },
            {
              menuValue:'Themify Icons',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'icon-themify',
              route:AllRoutes.iconThemify,
            },
            {
              menuValue:'Weather Icons',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'icon-weather',
              route:AllRoutes.iconWeather,
            },
            {
              menuValue:'Typicon Icons',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'icon-typicon',
              route:AllRoutes.iconTypicon,
            },
            {
              menuValue:'Flag Icons',
              showSubRoute:false,
              customSubmenuTwo:false,
              page:'icon-flag',
              route:AllRoutes.iconFlag,
            },
           
          ]
        },
        {
          menuValue: 'Widgets',
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'components',
          base: 'widgets',
          route:AllRoutes.widgets
          
        },
      ]
 
    },
    
    

  ];
    public getSideBarData: BehaviorSubject<Array<sidebarData>> =
    new BehaviorSubject<Array<sidebarData>>(this.sidebarData);

  public resetData(): void {
    this.sidebarData.map((res: sidebarData) => {
      res.showAsTab = false;
      res.menu.map((menus: menu) => {
        menus.showSubRoute = false;
      });
    });
  }
}
