import {AxiosResult} from './interface'

// 登录成功回调
// eslint-disable-next-line no-unused-vars
export type LoginSuccess = (data: AxiosResult) => void
// 退出成功
export type LogoutSuccess = () => void
// 重新加载App
export type ReloadApp = () => void
// 自定义图标类型
export type IconProps = {
    color?: string
    size?: number
}
// 单选框值
export type RadioValType = string | number | boolean | undefined
