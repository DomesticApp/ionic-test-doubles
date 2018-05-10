export class ModalStub {
	present(navOptions : any = {}) : Promise<any> {
		return Promise.resolve({});
	}

	dismiss (role = '') : Promise<any> {
		return Promise.resolve ({});
	}
}
