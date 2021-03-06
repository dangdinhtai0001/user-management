import { getSidebar, createRouter } from '~/utils/router'

export const routes = createRouter([

  {
    title: 'Trang chủ',
    path: '/',
    icon: 'el-icon-s-home',
    sidebar: true,
    pined: true,
    root: true,
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: 'dashboard',
    sidebar: true,
  },
  {
    id: '/evaluation',
    title: 'Đánh giá',
    icon: 'chart',
    sidebar: true,
    children: [
      {
        title: 'Đánh giá chung',
        icon: 'el-icon-platform-eleme',
        path: '/evaluation/review',
      },
      {
        title: 'Tự đánh giá',
        icon: 'user',
        path: '/evaluation/self',
      }
    ],
  },
  // {
  //   title: 'Document',
  //   path: '/document',
  //   icon: 'education',
  //   sidebar: true,
  // },
  // {
  //   id: '/components',
  //   title: 'Components',
  //   icon: 'chart',
  //   sidebar: true,
  //   children: [
  //     {
  //       title: 'Tinymce',
  //       path: '/components/tinymce',
  //     },
  //     {
  //       title: 'Upload',
  //       path: '/components/upload',
  //     },
  //     {
  //       title: 'JSON Editor',
  //       path: '/components/json-editor',
  //     },
  //   ],
  // },
  // {
  //   id: '/form',
  //   title: 'Form',
  //   icon: 'form',
  //   sidebar: true,
  //   children: [
  //     {
  //       title: 'Basic Form',
  //       path: '/form/basic',
  //     },
  //   ],
  // },
  // {
  //   id: 'error-pages',
  //   title: 'Error Page',
  //   icon: 'bug',
  //   sidebar: true,
  //   children: [
  //     { title: '404', path: '/error/404' },
  //     { title: '401', path: '/error/401' },
  //   ],
  // },
])

export const sidebarItems = getSidebar(routes)
