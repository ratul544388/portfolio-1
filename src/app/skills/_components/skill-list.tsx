import {motion} from 'framer-motion';
export const SkillList = ({
  label,
  percent,
}: {
  label: string;
  percent: number;
}) => {
  return (
    <div
      key={label}
      className="flex max-w-[600px] flex-col gap-2 whitespace-nowrap rounded-full text-sm font-medium"
    >
      <div className="flex items-center justify-between text-muted-foreground">
        <p className="min-w-[100px]">{label}</p>
        {percent}%
      </div>
      <div className="flex h-2 rounded-full bg-accent">
        <motion.span
          animate={{
            width: ["0%", `${percent}%`],
            transition: { duration: 2 },
          }}
          className="h-full rounded-full bg-gray-600 dark:bg-neutral-700"
        />
      </div>
    </div>
  );
};
