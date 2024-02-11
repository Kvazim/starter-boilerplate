import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardBasic = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'Основные',
  icon: '',
  breadcrumb: true,
  submenu: [
    {
      key: 'basic',
      path: `${APP_PREFIX_PATH}/home/dashboard`,
      title: 'Дашбоард',
      icon: DashboardOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'catalog',
      path: `${APP_PREFIX_PATH}/home/catalog`,
      title: 'Каталог',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'products',
          path: `${APP_PREFIX_PATH}/home/catalog/products`,
          title: 'Товары',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'categories',
          path: `${APP_PREFIX_PATH}/home/catalog/categories`,
          title: 'Категории',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'collections',
          path: `${APP_PREFIX_PATH}/home/catalog/collections`,
          title: 'Коллекции',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'combo',
          path: `${APP_PREFIX_PATH}/home/catalog/combo`,
          title: 'Комбо',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
      ]
    },
    {
      key: 'orders',
      path: `${APP_PREFIX_PATH}/home/orders`,
      title: 'Заказы',
      icon: ShoppingOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'clients',
      path: `${APP_PREFIX_PATH}/home/clients`,
      title: 'Клиенты',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: [
        {      
          key: 'list-clients',
          path: `${APP_PREFIX_PATH}/home/clients/list-clients`,
          title: 'Список клиентов',
          icon: '',
          breadcrumb: true,
          submenu:[],
        },
        {      
          key: 'group-clients',
          path: `${APP_PREFIX_PATH}/home/clients/group-clients`,
          title: 'Группы клиентов',
          icon: '',
          breadcrumb: true,
          submenu:[],
        },
      ]
    },
    {
      key: 'banners',
      path: `${APP_PREFIX_PATH}/home/banners`,
      title: 'Банеры',
      icon: PictureOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'promo-codes',
      path: `${APP_PREFIX_PATH}/home/promo-codes`,
      title: 'Промокоды',
      icon: GiftOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'offline-points',
      path: `${APP_PREFIX_PATH}/home/offline-points`,
      title: 'Офлайн точки',
      icon: ShopOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'points-addres',
          path: `${APP_PREFIX_PATH}/home/offline-points/points-addres`,
          title: 'Адреса',
          icon: '',
          breadcrumb: true,
          submenu: [],
        },
        {
          key: 'points-geosone',
          path: `${APP_PREFIX_PATH}/home/offline-points/points-geosone`,
          title: 'Геозоны',
          icon: '',
          breadcrumb: true,
          submenu: [],
        }
      ]
    },
    {
      key: 'employees',
      path: `${APP_PREFIX_PATH}/home/employees`,
      title: 'Сотрудники',
      icon: UsergroupAddOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'mailings',
      path: `${APP_PREFIX_PATH}/home/mailings`,
      title: 'Рассылки',
      icon: MailOutlined,
      breadcrumb: true,
      submenu: []
    },
  ]
}]

const dashBoardSystem = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'Системные',
  icon: '',
  breadcrumb: true,
  submenu: [
    {
      key: 'settings',
      path: `${APP_PREFIX_PATH}/system/settings`,
      title: 'Настройки',
      icon: SettingOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'mobile-app',
      path: `${APP_PREFIX_PATH}/system/mobile-app`,
      title: 'Мобильное приложение',
      icon: MobileOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'logs',
      path: `${APP_PREFIX_PATH}/system/logs`,
      title: 'Логи',
      icon: FileTextOutlined,
      breadcrumb: true,
      submenu: []
    },
  ]
}]

const navigationConfig = [
  ...dashBoardBasic,
  ...dashBoardSystem,
]

export default navigationConfig;
