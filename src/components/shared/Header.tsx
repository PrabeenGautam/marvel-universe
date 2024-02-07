type HeaderProps = {
  title: string;
};

type ButtonProps =
  | { enabledSeeAll?: false }
  | { enabledSeeAll: true; link: string; text: string };

type Props = HeaderProps & ButtonProps;

function Header({ title, ...props }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 uppercase tracking-wide">
      <h2 className="font-roboto text-2xl font-bold">{title}</h2>

      {props.enabledSeeAll && (
        <a href={props.link} className="text-sm font-medium hover:text-red-500">
          {props.text}
        </a>
      )}
    </div>
  );
}

export default Header;
