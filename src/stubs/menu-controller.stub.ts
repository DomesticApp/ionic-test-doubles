export class MenuControllerStub {
	public open (menuId? : string) : Promise<boolean> {
		return Promise.resolve (true);
	}

	public close (menuId? : string) : Promise<boolean> {
		return Promise.resolve (true);
	}

	public toggle (menuId? : string) : Promise<boolean> {
		return Promise.resolve (true);
	}

	public enable (shouldEnable : boolean, menuId? : string) : any {
		return {};
	}

	public swipeEnable (shouldEnable : boolean, menuId? : string) : any {
		return {};
	}

	public isOpen (menuId? : string) : boolean {
		return true;
	}

	public isEnabled (menuId? : string) : boolean {
		return true;
	}

	public get (menuId? : string) : any {
		return {};
	}

	public getOpen () : any {
		return {};
	}

	public getMenus () : Array<any> {
		return [];
	}

	public isAnimating () : boolean {
		// QSTN: What do you expect?
		return true;
	}
}
