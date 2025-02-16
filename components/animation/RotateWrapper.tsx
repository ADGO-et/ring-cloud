'use client';
import { motion } from "framer-motion";

type RotateWrapperProps = {
    degree?: number;
    direction?: "horizontal" | "vertical";
    children: React.ReactNode;
};

const RotateWrapper = ({
    degree = 360,
    direction = "horizontal",
    children,
}: RotateWrapperProps) => {
    const animation =
        direction === "horizontal"
            ? { rotateY: degree }
            : { rotateX: degree };

    const initial =
        direction === "horizontal"
            ? { rotateY: 0 }
            : { rotateX: 0 };

    return (
        <motion.div
            initial={initial}
            whileInView={animation}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ display: "inline-block" }}
        >
            {children}
        </motion.div>
    );
};

export default RotateWrapper;
