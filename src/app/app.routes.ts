import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'index',
        pathMatch:'full'
    },
    //Auth Routes//
    {
        path:'auth',loadComponent:()=>import('./auth/auth').then((m)=>m.Auth),
        children:[
           {path:'login',loadComponent:()=> import ('./auth/login/login').then((m)=>m.Login)}, 
           {path:'sign-up',loadComponent:()=> import ('./auth/sign-up/sign-up').then((m)=>m.SignUp)}, 
           {path:'change-password',loadComponent:()=> import ('./auth/change-password/change-password').then((m)=>m.ChangePassword)}, 
           {path:'forgot-password',loadComponent:()=> import ('./auth/forgot-password/forgot-password').then((m)=>m.ForgotPassword)}, 
        ] 
    },
    {path:'lock-screen',loadComponent:()=> import ('./auth/lock-screen/lock-screen').then((m)=>m.LockScreen)}, 

    //Features Routes//
    {
        path:'',loadComponent:()=>import('./features/features').then((m)=>m.Features),
        children:[
           {path:'index',loadComponent:()=> import ('./features/dashboard/dashboard').then((m)=>m.Dashboard)},
           {path:'patients',loadComponent:()=>import('./features/healthcare/patients/patients').then((m)=>m.Patients),
            children:[
                {path:'patients',loadComponent:()=>import('./features/healthcare/patients/patients-grid/patients-grid').then((m)=>m.PatientsGrid)},
                {path:'patient-search',loadComponent:()=>import('./features/healthcare/patients/patient-search/patient-search').then((m)=>m.PatientSearch)},
                {path:'all-patients-list',loadComponent:()=>import('./features/healthcare/patients/patients-list/patients-list').then((m)=>m.PatientsList)},
                {path:'add-patient',loadComponent:()=>import('./features/healthcare/patients/add-patient/add-patient').then((m)=>m.AddPatient)},
                {path:'edit-patient',loadComponent:()=>import('./features/healthcare/patients/edit-patient/edit-patient').then((m)=>m.EditPatient)},
                {path:'patient-details',loadComponent:()=>import('./features/healthcare/patients/patient-details/patient-details/patient-details').then((m)=>m.PatientDetails)},
                {path:'patient-details-vital-signs',loadComponent:()=>import('./features/healthcare/patients/patient-details/patient-details-vital-signs/patient-details-vital-signs').then((m)=>m.PatientDetailsVitalSigns)},
                {path:'patient-details-appointments',loadComponent:()=>import('./features/healthcare/patients/patient-details/patient-details-appointments/patient-details-appointments').then((m)=>m.PatientDetailsAppointments)},
                {path:'patient-details-documents',loadComponent:()=>import('./features/healthcare/patients/patient-details/patient-details-documents/patient-details-documents').then((m)=>m.PatientDetailsDocuments)},
                {path:'patient-details-visit-history',loadComponent:()=>import('./features/healthcare/patients/patient-details/patient-details-visit-history/patient-details-visit-history').then((m)=>m.PatientDetailsVisitHistory)},
                {path:'patient-details-lab-results',loadComponent:()=>import('./features/healthcare/patients/patient-details/patient-details-lab-results/patient-details-lab-results').then((m)=>m.PatientDetailsLabResults)},
                {path:'patient-details-prescription',loadComponent:()=>import('./features/healthcare/patients/patient-details/patient-details-prescription/patient-details-prescription').then((m)=>m.PatientDetailsPrescription)},
                {path:'patient-details-medical-history',loadComponent:()=>import('./features/healthcare/patients/patient-details/patient-details-medical-history/patient-details-medical-history').then((m)=>m.PatientDetailsMedicalHistory)},   
                {path:'patient-details-insurance',loadComponent:()=>import('./features/healthcare/patients/patient-details/patient-details-insurance/patient-details-insurance').then((m)=>m.PatientDetailsInsurance)},
            ]
           },
        
           {path:'doctors',loadComponent:()=>import('./features/healthcare/doctors/doctors').then((m)=>m.Doctors),
            children:[
                {path:'doctors',loadComponent:()=>import('./features/healthcare/doctors/doctors-grid/doctors-grid').then((m)=>m.DoctorsGrid)},
                {path:'all-doctors-list',loadComponent:()=>import('./features/healthcare/doctors/doctors-list/doctors-list').then((m)=>m.DoctorsList)},
                {path:'add-doctor',loadComponent:()=>import('./features/healthcare/doctors/add-doctors/add-doctors').then((m)=>m.AddDoctors)},
                {path:'edit-doctor',loadComponent:()=>import('./features/healthcare/doctors/edit-doctors/edit-doctors').then((m)=>m.EditDoctors)},
                {path:'doctor-details',loadComponent:()=>import('./features/healthcare/doctors/doctor-details/doctor-details').then((m)=>m.DoctorDetails)},
            ]
           },
           {path:'doctors',loadComponent:()=>import('./features/healthcare/doctors/doctors-grid/doctors-grid').then((m)=>m.DoctorsGrid)},
           {path:'all-doctors-list',loadComponent:()=>import('./features/healthcare/doctors/doctors-list/doctors-list').then((m)=>m.DoctorsList)},
           {path:'add-doctor',loadComponent:()=>import('./features/healthcare/doctors/add-doctors/add-doctors').then((m)=>m.AddDoctors)},
           {path:'edit-doctor',loadComponent:()=>import('./features/healthcare/doctors/edit-doctors/edit-doctors').then((m)=>m.EditDoctors)},
           {path:'doctor-details',loadComponent:()=>import('./features/healthcare/doctors/doctor-details/doctor-details').then((m)=>m.DoctorDetails)},
           {path:'requests',loadComponent:()=>import('./features/healthcare/requests/requests').then((m)=>m.Requests)},
           {path:'appointments',loadComponent:()=>import('./features/healthcare/appointments/appointments').then((m)=>m.Appointments),
            children:[
                {path:'appointment',loadComponent:()=>import('./features/healthcare/appointments/appointments/appointments').then((m)=>m.Appointments)},
                {path:'appointment-consultation',loadComponent:()=>import('./features/healthcare/appointments/appointment-consultation/appointment-consultation').then((m)=>m.AppointmentConsultation)},
                {path:'appointment-calendar',loadComponent:()=>import('./features/healthcare/appointments/appointment-calendar/appointment-calendar').then((m)=>m.AppointmentCalendar)},
                {path:'transactions',loadComponent:()=>import('./features/healthcare/appointments/transactions/transactions').then((m)=>m.Transactions)},
                {path:'transaction-details',loadComponent:()=>import('./features/healthcare/appointments/transaction-details/transaction-details').then((m)=>m.TransactionDetails)},
            ]
           },
           {path:'visits',loadComponent:()=>import('./features/healthcare/visits/visits').then((m)=>m.Visits)},
           {path:'pharmacy',loadComponent:()=>import('./features/healthcare/pharmacy/pharmacy').then((m)=>m.Pharmacy)},
           {path:'laboratory',loadComponent:()=>import('./features/healthcare/laboratory/laboratory').then((m)=>m.Laboratory),
            children:[
                {path:'lab-results',loadComponent:()=>import('./features/healthcare/laboratory/lab-results/lab-results').then((m)=>m.LabResults)},
                {path:'medical-results',loadComponent:()=>import('./features/healthcare/laboratory/medical-results/medical-results').then((m)=>m.MedicalResults)},
            ]
           },
           {path:'start-visits',loadComponent:()=>import('./features/healthcare/start-visits/start-visits').then((m)=>m.StartVisits)},
           {path:'staffs',loadComponent:()=>import('./features/manage/staffs/staffs').then((m)=>m.Staffs)},
           {path:'notifications',loadComponent:()=>import('./features/manage/notifications/notifications').then((m)=>m.Notifications)},
           {path:'settings',loadComponent:()=>import('./features/manage/settings/settings').then((m)=>m.Settings),
            children:[
                {path:'general-settings',loadComponent:()=>import('./features/manage/settings/general-settings/general-settings').then((m)=>m.GeneralSettings)},
                {path:'security-settings',loadComponent:()=>import('./features/manage/settings/security-settings/security-settings').then((m)=>m.SecuritySettings)},
                {path:'preferences-settings',loadComponent:()=>import('./features/manage/settings/preferences-settings/preferences-settings').then((m)=>m.PreferencesSettings)},
                {path:'permission-settings',loadComponent:()=>import('./features/manage/settings/permission-settings/permission-settings').then((m)=>m.PermissionSettings)},
                {path:'appearance-settings',loadComponent:()=>import('./features/manage/settings/appearance-settings/appearance-settings').then((m)=>m.AppearanceSettings)},
                {path:'notifications-settings',loadComponent:()=>import('./features/manage/settings/notifications-settings/notifications-settings').then((m)=>m.NotificationsSettings)},
                {path:'user-permissions-settings',loadComponent:()=>import('./features/manage/settings/user-permissions-settings/user-permissions-settings').then((m)=>m.UserPermissionsSettings)},
                {path:'plans-billings-settings',loadComponent:()=>import('./features/manage/settings/plans-billings-settings/plans-billings-settings').then((m)=>m.PlansBillingsSettings)},
            ]
           },
           
           
           //UI Interface//
           { path:'base-ui',loadComponent:()=>import('./features/ui-interface/base-ui/base-ui').then((m)=>m.BaseUi),
            children:[
                {path:'ui-accordion',loadComponent:()=>import('./features/ui-interface/base-ui/ui-accordion/ui-accordion').then((m)=>m.UiAccordion)},
                {path:'ui-alerts',loadComponent:()=>import('./features/ui-interface/base-ui/ui-alerts/ui-alerts').then((m)=>m.UiAlerts)},
                {path:'ui-avatar',loadComponent:()=>import('./features/ui-interface/base-ui/ui-avatar/ui-avatar').then((m)=>m.UiAvatar)},
                {path:'ui-badges',loadComponent:()=>import('./features/ui-interface/base-ui/ui-badges/ui-badges').then((m)=>m.UiBadges)},
                {path:'ui-breadcrumb',loadComponent:()=>import('./features/ui-interface/base-ui/ui-breadcrumb/ui-breadcrumb').then((m)=>m.UiBreadcrumb)},
                {path:'ui-buttons',loadComponent:()=>import('./features/ui-interface/base-ui/ui-buttons/ui-buttons').then((m)=>m.UiButtons)},
                {path:'ui-buttons-group',loadComponent:()=>import('./features/ui-interface/base-ui/ui-buttons-group/ui-buttons-group').then((m)=>m.UiButtonsGroup)},
                {path:'ui-cards',loadComponent:()=>import('./features/ui-interface/base-ui/ui-cards/ui-cards').then((m)=>m.UiCards)},
                {path:'ui-carousel',loadComponent:()=>import('./features/ui-interface/base-ui/ui-carousel/ui-carousel').then((m)=>m.UiCarousel)},
                {path:'ui-collapse',loadComponent:()=>import('./features/ui-interface/base-ui/ui-collapse/ui-collapse').then((m)=>m.UiCollapse)},
                {path:'ui-dropdowns',loadComponent:()=>import('./features/ui-interface/base-ui/ui-dropdowns/ui-dropdowns').then((m)=>m.UiDropdowns)},
                {path:'ui-links',loadComponent:()=>import('./features/ui-interface/base-ui/ui-links/ui-links').then((m)=>m.UiLinks)},
                {path:'ui-list-group',loadComponent:()=>import('./features/ui-interface/base-ui/ui-list-group/ui-list-group').then((m)=>m.UiListGroup)},
                {path:'ui-modal',loadComponent:()=>import('./features/ui-interface/base-ui/ui-modals/ui-modals').then((m)=>m.UiModals)},
                {path:'ui-ratio',loadComponent:()=>import('./features/ui-interface/base-ui/ui-ratio/ui-ratio').then((m)=>m.UiRatio)},
                {path:'ui-grid',loadComponent:()=>import('./features/ui-interface/base-ui/ui-grid/ui-grid').then((m)=>m.UiGrid)},
                {path:'ui-images',loadComponent:()=>import('./features/ui-interface/base-ui/ui-images/ui-images').then((m)=>m.UiImages)},
                {path:'ui-modals',loadComponent:()=>import('./features/ui-interface/base-ui/ui-modals/ui-modals').then((m)=>m.UiModals)},
                {path:'ui-offcanvas',loadComponent:()=>import('./features/ui-interface/base-ui/ui-offcanvas/ui-offcanvas').then((m)=>m.UiOffcanvas)},
                {path:'ui-pagination',loadComponent:()=>import('./features/ui-interface/base-ui/ui-pagination/ui-pagination').then((m)=>m.UiPagination)},
                {path:'ui-placeholders',loadComponent:()=>import('./features/ui-interface/base-ui/ui-placeholders/ui-placeholders').then((m)=>m.UiPlaceholders)},
                {path:'ui-popovers',loadComponent:()=>import('./features/ui-interface/base-ui/ui-popovers/ui-popovers').then((m)=>m.UiPopovers)},
                {path:'ui-progress',loadComponent:()=>import('./features/ui-interface/base-ui/ui-progress/ui-progress').then((m)=>m.UiProgress)},
                {path:'ui-scrollspy',loadComponent:()=>import('./features/ui-interface/base-ui/ui-scrollspy/ui-scrollspy').then((m)=>m.UiScrollspy)},
                {path:'ui-spinner',loadComponent:()=>import('./features/ui-interface/base-ui/ui-spinner/ui-spinner').then((m)=>m.UiSpinner)},
                {path:'ui-nav-tabs',loadComponent:()=>import('./features/ui-interface/base-ui/ui-tabs/ui-tabs').then((m)=>m.UiTabs)},
                {path:'ui-toasts',loadComponent:()=>import('./features/ui-interface/base-ui/ui-toasts/ui-toasts').then((m)=>m.UiToasts)},
                {path:'ui-tooltips',loadComponent:()=>import('./features/ui-interface/base-ui/ui-tooltips/ui-tooltips').then((m)=>m.UiTooltips)},
                {path:'ui-typography',loadComponent:()=>import('./features/ui-interface/base-ui/ui-typography/ui-typography').then((m)=>m.UiTypography)},
                {path:'ui-utilities',loadComponent:()=>import('./features/ui-interface/base-ui/ui-utilities/ui-utilities').then((m)=>m.UiUtilities)},
            ]

           },
           { path:'advanced-ui',loadComponent:()=>import('./features/ui-interface/advanced-ui/advanced-ui').then((m)=>m.AdvancedUi),
            children:[
                {path:'ui-rating',loadComponent:()=>import('./features/ui-interface/advanced-ui/rating/rating').then((m)=>m.Rating)},
                {path:'ui-text-editor',loadComponent:()=>import('./features/ui-interface/advanced-ui/text-editor/text-editor').then((m)=>m.TextEditor)},
                {path:'ui-drag-drop',loadComponent:()=>import('./features/ui-interface/advanced-ui/drag-drop/drag-drop').then((m)=>m.DragDrop)},
                {path:'ui-rangeslider',loadComponent:()=>import('./features/ui-interface/advanced-ui/rangeslider/rangeslider').then((m)=>m.Rangeslider)},
                {path:'ui-lightbox',loadComponent:()=>import('./features/ui-interface/advanced-ui/ui-lightbox/ui-lightbox').then((m)=>m.UiLightbox)},
                {path:'ui-scrollbar',loadComponent:()=>import('./features/ui-interface/advanced-ui/scrollbar/scrollbar').then((m)=>m.Scrollbar)},
                {path:'ui-clipboard',loadComponent:()=>import('./features/ui-interface/advanced-ui/clipboard/clipboard').then((m)=>m.Clipboard)},
            ]
           },
           { path:'forms',loadComponent:()=>import('./features/ui-interface/forms/forms').then((m)=>m.Forms),
            children:[
                {path:'form-element',loadComponent:()=>import('./features/ui-interface/forms/form-element/form-element').then((m)=>m.FormElement),
                    children:[
                        {path:'form-basic-inputs',loadComponent:()=>import('./features/ui-interface/forms/form-element/form-basic-inputs/form-basic-inputs').then((m)=>m.FormBasicInputs)},
                        {path:'form-checkbox-radios',loadComponent:()=>import('./features/ui-interface/forms/form-element/form-checkbox-radios/form-checkbox-radios').then((m)=>m.FormCheckboxRadios)},
                        {path:'form-input-groups',loadComponent:()=>import('./features/ui-interface/forms/form-element/form-input-groups/form-input-groups').then((m)=>m.FormInputGroups)},
                        {path:'form-grid-gutters',loadComponent:()=>import('./features/ui-interface/forms/form-element/form-grid-gutters/form-grid-gutters').then((m)=>m.FormGridGutters)},
                        {path:'form-mask',loadComponent:()=>import('./features/ui-interface/forms/form-element/form-mask/form-mask').then((m)=>m.FormMask)},
                        {path:'form-fileupload',loadComponent:()=>import('./features/ui-interface/forms/form-element/form-fileupload/form-fileupload').then((m)=>m.FormFileupload)},
                    ]
                },
                {path:'layouts',loadComponent:()=>import('./features/ui-interface/forms/layouts/layouts').then((m)=>m.Layouts),
                    children:[
                        {path:'form-horizontal',loadComponent:()=>import('./features/ui-interface/forms/layouts/form-horizontal/form-horizontal').then((m)=>m.FormHorizontal)},
                        {path:'form-vertical',loadComponent:()=>import('./features/ui-interface/forms/layouts/form-vertical/form-vertical').then((m)=>m.FormVertical)},
                        {path:'form-floating-labels',loadComponent:()=>import('./features/ui-interface/forms/layouts/form-floating-labels/form-floating-labels').then((m)=>m.FormFloatingLabels)},
                    ]
                },
                {path:'form-validation',loadComponent:()=>import('./features/ui-interface/forms/form-validation/form-validation').then((m)=>m.FormValidation)},
                {path:'form-select',loadComponent:()=>import('./features/ui-interface/forms/form-select/form-select').then((m)=>m.FormSelect)},
                {path:'form-wizard',loadComponent:()=>import('./features/ui-interface/forms/form-wizard/form-wizard').then((m)=>m.FormWizard)},
                {path:'form-pickers',loadComponent:()=>import('./features/ui-interface/forms/form-pickers/form-pickers').then((m)=>m.FormPickers)},
                {path:'form-editors',loadComponent:()=>import('./features/ui-interface/forms/form-editors/form-editors').then((m)=>m.FormEditors)},
            ]
           },
           { path:'tables',loadComponent:()=>import('./features/ui-interface/tables/tables').then((m)=>m.Tables),
            children:[
                {path:'tables-basic',loadComponent:()=>import('./features/ui-interface/tables/tables-basic/tables-basic').then((m)=>m.TablesBasic)},
                {path:'data-tables',loadComponent:()=>import('./features/ui-interface/tables/data-tables/data-tables').then((m)=>m.DataTables)},
            ]
           },
           { path:'icons',loadComponent:()=>import('./features/ui-interface/icons/icons').then((m)=>m.Icons),
            children:[
                {path:'icon-bootstrap',loadComponent:()=>import('./features/ui-interface/icons/icon-bootstrap/icon-bootstrap').then((m)=>m.IconBootstrap)},
                {path:'icon-feather',loadComponent:()=>import('./features/ui-interface/icons/icon-feather/icon-feather').then((m)=>m.IconFeather)},
                {path:'icon-flag',loadComponent:()=>import('./features/ui-interface/icons/icon-flag/icon-flag').then((m)=>m.IconFlag)},
                {path:'icon-fontawesome',loadComponent:()=>import('./features/ui-interface/icons/icon-fontawesome/icon-fontawesome').then((m)=>m.IconFontawesome)},
                {path:'icon-ionic',loadComponent:()=>import('./features/ui-interface/icons/icon-ionic/icon-ionic').then((m)=>m.IconIonic)},
                {path:'icon-material',loadComponent:()=>import('./features/ui-interface/icons/icon-material/icon-material').then((m)=>m.IconMaterial)},
                {path:'icon-pe7',loadComponent:()=>import('./features/ui-interface/icons/icon-pe7/icon-pe7').then((m)=>m.IconPe7)},
                {path:'icon-remix',loadComponent:()=>import('./features/ui-interface/icons/icon-remix/icon-remix').then((m)=>m.IconRemix)},
                {path:'icon-simpleline',loadComponent:()=>import('./features/ui-interface/icons/icon-simpleline/icon-simpleline').then((m)=>m.IconSimpleline)},
                {path:'icon-tabler',loadComponent:()=>import('./features/ui-interface/icons/icon-tabler/icon-tabler').then((m)=>m.IconTabler)},
                {path:'icon-themify',loadComponent:()=>import('./features/ui-interface/icons/icon-themify/icon-themify').then((m)=>m.IconThemify)},
                {path:'icon-typicon',loadComponent:()=>import('./features/ui-interface/icons/icon-typicon/icon-typicon').then((m)=>m.IconTypicon)},
                {path:'icon-weather',loadComponent:()=>import('./features/ui-interface/icons/icon-weather/icon-weather').then((m)=>m.IconWeather)},
            ]

           },
           { path:'charts',loadComponent:()=>import('./features/ui-interface/charts/charts').then((m)=>m.Charts),
            children:[
                {path:'prime-ng',loadComponent:()=>import('./features/ui-interface/charts/prime-ng/prime-ng').then((m)=>m.PrimeNg)},
                {path:'chart-apex',loadComponent:()=>import('./features/ui-interface/charts/chart-apex/chart-apex').then((m)=>m.ChartApex)},
            ]

           },
           { path:'widgets',loadComponent:()=>import('./features/ui-interface/widgets/widgets').then((m)=>m.Widgets)},
           { path:'application',loadComponent:()=>import('./features/application/application').then((m)=>m.Application),
            children:[
                {path:'chat',loadComponent:()=>import('./features/application/chat/chat').then((m)=>m.Chat)},
                {path:'calendar',loadComponent:()=>import('./features/application/calendar/calendar').then((m)=>m.CalendarComponent)},
                {path:'email',loadComponent:()=>import('./features/application/email/email').then((m)=>m.Email)},
                {path:'email-compose',loadComponent:()=>import('./features/application/email-compose/email-compose').then((m)=>m.EmailCompose)},
                {path:'email-details',loadComponent:()=>import('./features/application/email-details/email-details').then((m)=>m.EmailDetails)},
                {path:'contacts',loadComponent:()=>import('./features/application/contacts/contacts').then((m)=>m.Contacts)},
                {path:'contacts-list',loadComponent:()=>import('./features/application/contacts-list/contacts-list').then((m)=>m.ContactsList)},
                {path:'file-manager',loadComponent:()=>import('./features/application/file-manager/file-manager').then((m)=>m.FileManager)},
                {path:'kanban-view',loadComponent:()=>import('./features/application/kanban-view/kanban-view').then((m)=>m.KanbanView)},
                {path:'notes',loadComponent:()=>import('./features/application/notes/notes').then((m)=>m.Notes)},
                {path:'social-feed',loadComponent:()=>import('./features/application/social-feed/social-feed').then((m)=>m.SocialFeed)},
                {path:'search-result',loadComponent:()=>import('./features/application/search-result/search-result').then((m)=>m.SearchResult)},
                {path:'calls',loadComponent:()=>import('./features/application/calls/calls').then((m)=>m.Calls),
                    children:[
                        {path:'voice-call',loadComponent:()=>import('./features/application/calls/voice-call/voice-call').then((m)=>m.VoiceCall)},
                        {path:'video-call',loadComponent:()=>import('./features/application/calls/video-call/video-call').then((m)=>m.VideoCall)},
                    ]
                },
                {path:'invoice',loadComponent:()=>import('./features/application/invoice/invoice').then((m)=>m.Invoice),
                    children:[
                        {path:'add-invoice',loadComponent:()=>import('./features/application/invoice/add-invoice/add-invoice').then((m)=>m.AddInvoice)},
                        {path:'edit-invoice',loadComponent:()=>import('./features/application/invoice/edit-invoice/edit-invoice').then((m)=>m.EditInvoice)},
                        {path:'invoice-list',loadComponent:()=>import('./features/application/invoice/invoice-list/invoice-list').then((m)=>m.InvoiceList)},
                        {path:'invoice-details',loadComponent:()=>import('./features/application/invoice/invoice-details/invoice-details').then((m)=>m.InvoiceDetails)},
                    ]
                },
                {path:'todo',loadComponent:()=>import('./features/application/todo/todo').then((m)=>m.Todo)},
            ]

           },
           { path:'pages',loadComponent:()=>import('./features/pages/pages').then((m)=>m.Pages),
            children:[

                {path:'starter-page',loadComponent:()=>import('./features/pages/starter-page/starter-page').then((m)=>m.StarterPage)},
                {path:'privacy-policy',loadComponent:()=>import('./features/pages/privacy-policy/privacy-policy').then((m)=>m.PrivacyPolicy)},
                {path:'terms-and-conditions',loadComponent:()=>import('./features/pages/terms-and-conditions/terms-and-conditions').then((m)=>m.TermsAndConditions)},
            ]
           },
           //layout
           { path: 'layout-mini', loadComponent: () => import('./features/modal-dashboard/modal-dashboard').then((m) => m.ModalDashboard), },
           { path: 'layout-hoverview', loadComponent: () => import('./features/modal-dashboard/modal-dashboard').then((m) => m.ModalDashboard), },
           { path: 'layout-hidden', loadComponent: () => import('./features/modal-dashboard/modal-dashboard').then((m) => m.ModalDashboard), },
           { path: 'layout-fullwidth', loadComponent: () => import('./features/modal-dashboard/modal-dashboard').then((m) => m.ModalDashboard), },
           { path: 'layout-rtl', loadComponent: () => import('./features/modal-dashboard/modal-dashboard').then((m) => m.ModalDashboard), },
           { path: 'layout-dark', loadComponent: () => import('./features/modal-dashboard/modal-dashboard').then((m) => m.ModalDashboard), },

       
        ] 
    },
    {path:'coming-soon',loadComponent:()=>import('./features/pages/coming-soon/coming-soon').then((m)=>m.ComingSoon)},
    {path:'under-maintenance',loadComponent:()=>import('./features/pages/under-maintenance/under-maintenance').then((m)=>m.UnderMaintenance)},
        //Error Pages
        { path: 'error-404', loadComponent: () => import('./errors/error-404/error-404').then((m) => m.Error404), },
        { path: 'error-500', loadComponent: () => import('./errors/error-500/error-500').then((m) => m.Error500), },

        {
            path:'**',
            redirectTo:'error-404',
            pathMatch:'full'
        }
];
