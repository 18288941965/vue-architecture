
/**
 * 后端统一返回值接口.
 * @param code 代码
 * @param message 提示信息
 * @param data 数据
 */
interface AxiosResult {
    code: number
    message: string
    data: any | undefined | null
}

/**
 * 分页对象.
 * @param pageNum 页码
 * @param pageSize 条数
 * @param total 总数
 * @param list 数据
 */
interface Pagination<T> {
    pageNum: number
    pageSize: number
    total: number
    list: Array<T>
}

/**
 * 对话框-无参.
 * @param show 状态标识
 */
interface DialogEmpty{
    show: boolean
}

/**
 * 对话框-唯一标识.
 * @param dataId 唯一标识
 */
interface DialogBase<T> extends DialogEmpty{
    dataId: T | undefined
}

interface PropPrams {
    [key: string]: any
}

/**
 * 对话框-json参数.
 * @param params json对象参数
 */
interface DialogParam extends DialogEmpty{
    params: PropPrams
}

export type {
    AxiosResult,
    Pagination,
    PropPrams,

    DialogEmpty,
    DialogBase,
    DialogParam,
}