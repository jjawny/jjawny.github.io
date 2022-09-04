/* an individual project can have some or none of the properties */
export interface ISingleProject {
    banner: string | undefined,
    title: string | undefined,
    desc: string | undefined,
    link: string | undefined,
    shields: string[] | undefined
}

export interface IAllProjects {
    projects: ISingleProject[]
}

export interface ILoadedState {
    loaded: boolean,
    setLoaded: React.Dispatch<React.SetStateAction<boolean>>
}
