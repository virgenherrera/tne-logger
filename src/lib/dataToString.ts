import { stringify } from 'flatted';

export function dataToString(arg: any): string {
	return (arg !== new Object(arg))
		? `${arg}`
		: stringify(arg);
}
