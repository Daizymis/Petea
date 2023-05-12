type WithChildren<T = {}> = T & {children ?: React.ReactNode};

export type CardProps = WithChildren<{title: string}>;
