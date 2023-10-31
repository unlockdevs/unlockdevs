import { Line } from "./layout";

export const SectionTitle = ({ id, children }) => (
    <div id={id} className="flex items-center justify-center flex-col gap-4 mt-[10rem] mb-10">
        {children}
        <Line horizontal />
    </div>
)