export type Item = {
    findById(arg0: (item: any) => boolean): unknown;
    id: number,
    name: string,
    done: boolean,
}