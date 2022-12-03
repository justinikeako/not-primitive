import classNames from 'classnames';
import { Button } from './button';
import { formatPrice } from '../utils/format';
import Link from 'next/link';

type ProductCardProps = {
	name: string;
	startingPrice: number;
	className?: string;
	displayVersion?: boolean;
};

function ProductCard({
	name,
	startingPrice,
	displayVersion = false,
	...props
}: ProductCardProps) {
	return (
		<li
			className={classNames(
				'col-span-1 flex h-[40vh] flex-col items-start justify-end bg-gray-200 p-8 md:h-[50vmin]',
				props.className
			)}
		>
			{/*  eslint-disable-next-line @next/next/no-img-element */}
			<div className="space-y-2">
				{displayVersion ? (
					<h3 className="text-xl">{name}</h3>
				) : (
					<h3 className="text-lg">{name}</h3>
				)}
				<p>
					Starting at {formatPrice(startingPrice)} per ft<sup>2</sup>
				</p>
				<Button variant="secondary" className="w-fit" asChild>
					<Link href="/product">Learn More</Link>
				</Button>
			</div>
		</li>
	);
}

export { ProductCard };