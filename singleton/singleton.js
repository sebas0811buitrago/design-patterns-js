class Counter {
  constructor() {
    if (this.instance) {
      throw new Error('You can only create one instance!');
    }
    this.instance = this;
    this.count = 0;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return this.count;
  }

  increment() {
    return ++this.count;
  }

  decrement() {
    return --this.count;
  }
}

const singletonCounter = new Counter();
export default singletonCounter;

// export interface InitializeProps {
//   appUserPermissions: string[];
//   urlSSO: string;
//   urlCurrentApp: string;
//   urlCurrentAppLogout: string;
//   urlApiHealthNexus: string;
//   appName: string;
//   urlAppPortal: string;
//   urlAppHealthNexus: string;
//   urlAppAdminCenter: string;
//   urlAppAdminCenterNew: string;
//   urlAppDataExtraction: string;
//   urlAppFileDelivery: string;
//   urlAppPatientGroups: string;
//   urlAppLookerDashboards: string;
//   apiKeyHealthNexus: string;
//   currentEnv: string;
//   urlDashboardsApi: string;
//   urlGalleryIconsCloudfront: string;
//   urlAppProviderGroups: string;
// }

// class ContextManager {
//   private static instance: ContextManager;
//   public readonly data: InitializeProps;

//   private constructor(data: InitializeProps) {
//     this.data = data;
//   }

//   public static initialize(props: InitializeProps): ContextManager {
//     if (ContextManager.instance) return ContextManager.instance;

//     ContextManager.instance = new ContextManager(props);

//     return ContextManager.instance;
//   }

//   public static getInstance(): InitializeProps {
//     if (!ContextManager.instance) {
//       throw new Error('ContextManager initialize needs to be setup first');
//     }

//     return ContextManager.instance.data;
//   }
// }

// export default ContextManager;
