import { CREATE_NOTE_URL, NOTES_URL } from 'constants/routes';

export const KEY_REDUCER = 'sidebar';

export const sidebarMenuItems = [
    {
        key: '1',
        icon: 'inbox',
        title: 'Notes',
        url: NOTES_URL,
    },
    {
        key: '2',
        icon: 'star',
        title: 'Important',
        url: '#',
    },
    {
        key: '3',
        icon: 'tag',
        title: 'Tags',
        url: '#',
    },
    {
        key: '4',
        icon: 'plus-circle',
        title: 'Create note',
        url: CREATE_NOTE_URL,
    },
    {
        key: '5',
        icon: 'search',
        title: 'Search',
        url: '#',
    },
    {
        key: '6',
        icon: 'wechat',
        title: 'Work chat',
        url: '#',
    },
];
