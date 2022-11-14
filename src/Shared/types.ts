/* an individual project can have some or none of the properties */
export interface SingleProject {
    banner: string | undefined,
    title: string | undefined,
    desc: string | undefined,
    link: string | undefined,
    shields: string[] | undefined
}

export interface AllProjects {
    projects: SingleProject[]
}

export interface LoadedState {
    loaded: boolean,
    setLoaded: React.Dispatch<React.SetStateAction<boolean>>
}
