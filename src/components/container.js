export function Container({ children, className }) {
    return (
        <section className={`flex w-full items-center justify-center ${className}`}>
            {children}
        </section>
    )
}