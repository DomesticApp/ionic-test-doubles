export class NavControllerStub {
	public push (page : any, params? : any, opts? : any,
			done? : Function) : Promise<any> {
		return Promise.resolve ({});
	}

	public insert (...args : any[]) : Promise<any> {
		return Promise.resolve ({});
	}

	public insertPages (...args : any[]) : Promise<any> {
		return Promise.resolve ({});
	}

	public pop (opts? : any, done? : Function) : Promise<any> {
		return Promise.resolve ({});
	}

	public popToRoot (opts? : any, done? : Function) : Promise<any> {
		return Promise.resolve ({});
	}

	public popTo (...args : any[]) : Promise<any> {
		return Promise.resolve ({});
	}

	public popAll () : Promise<any[]> {
		return Promise.resolve ([]);
	}

	public remove (...args : any[]) : Promise<any> {
		return Promise.resolve ({});
	}

	public removeView (...args : any[]) : Promise<any> {
		return Promise.resolve ({});
	}

	public setRoot (...args : any[]) : Promise<any> {
		return Promise.resolve ({});
	}

	public setPages (...args : any[]) : Promise<any> {
		return Promise.resolve ({});
	}

	public getByIndex (index : number) : any {
		return {};
	}

	public getActive (includeEntering? : boolean) : any {
		return {};
	}

	public isActive (view : any) : boolean {
		return true;
	}

	public getPrevious (view? : any) : any {
		return {};
	}

	public first () : any {
		return {};
	}

	public last () : any {
		return {};
	}

	public indexOf (view : {}) : number {
		return 1;
	}

	public length () : number {
		return 1;
	}

	public getViews () : Array<any> {
		return [];
	}

	public getActiveChildNav () : any {
		return {};
	}

	public isTransitioning (includeAncestors? : boolean) : boolean {
		// QSTN: What do you really expect?
		return true;
	}

	public canSwipeBack() : boolean {
		return true;
	}

	public canGoBack() : boolean {
		return true;
	}

	public registerChildNav (nav : any) : void {
		return;
	}

	public resize () : void {
		return;
	}

	public goToRoot () : void {
		return;
	}
}
