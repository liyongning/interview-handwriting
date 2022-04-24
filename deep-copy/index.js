/**
 * 深拷贝
 * 
 * @param { any } src 原数据
 * @returns 返回拷贝后的数据
 */
function deepCopy(src) {
	// 原始值的拷贝是值拷贝，直接返回
	if (isPrimitiveType(src)) return src

}


/**
 * 判断数据是否为原始值类型（Number、Boolean、String、Symbol、BigInt、Null、Undefined）
 * @param { any } data
 * @returns Boolean
 */
function isPrimitiveType(data) {
	const primitiveType = ['Number', 'Boolean', 'String', 'Symbol', 'BigInt', 'Null', 'Undefined']

	return primitiveType.includes(Object.prototype.toString(data).slice(8, -1))
}