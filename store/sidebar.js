import { vToggle } from '~/utils/vuex';
import { cloneDeep, get } from '~/utils/external/lodash';
import { checkPermission } from '~/utils/router';
import { sidebarItems } from '@/settings/router'

export const state = () => ({
    opened: false,
})

export const getters = {
    items(state, getters, rootState) {
        const userRoles = get(rootState, 'auth.user.roles', []).map((e) => e.name)
        const items = cloneDeep(sidebarItems)
        return filterSidebar(items, userRoles)
    },
}

// Mutations
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

export const mutations = {
    [TOGGLE_SIDEBAR]: vToggle('opened'),
}

export const actions = {}

//~ function -----------------------------

function filterSidebar(items, userRoles = [], userPermissions = []) {
    return items.filter((item) => {
        item.key = item.id || item.path || item.title
        if (item.children) {
            item.children = filterSidebar(item.children, userRoles, userPermissions)
        }
        if (item.meta.role || item.meta.permission) {
            return (
                checkPermission(
                    userRoles,
                    item.meta.role || [],
                    item.meta.condition.role
                ) &&
                checkPermission(
                    userPermissions,
                    item.meta.permission || [],
                    item.meta.condition.permission
                )
            )
        }
        return true
    })
}