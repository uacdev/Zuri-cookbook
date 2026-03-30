import { Breadcrumb } from "@chakra-ui/react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    color?: string;
    activeColor?: string;
    mb?: string | number;
}

export const AppBreadcrumbs = ({
    items,
    color = "#99A1AF",
    activeColor = "white",
    mb
}: BreadcrumbsProps) => {
    return (
        <Breadcrumb.Root mb={mb} className="no-print">
            <Breadcrumb.List>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <span key={index} style={{ display: 'flex', alignItems: 'center' }}>
                            <Breadcrumb.Item color={isLast ? activeColor : color}>
                                {isLast || !item.href ? (
                                    <Breadcrumb.CurrentLink
                                        color={activeColor}
                                        textTransform={isLast ? 'capitalize' : 'none'}
                                    >
                                        {item.label}
                                    </Breadcrumb.CurrentLink>
                                ) : (
                                    <Breadcrumb.Link color={color} href={item.href}>
                                        {item.label}
                                    </Breadcrumb.Link>
                                )}
                            </Breadcrumb.Item>
                            {!isLast && <Breadcrumb.Separator color={color} />}
                        </span>
                    );
                })}
            </Breadcrumb.List>
        </Breadcrumb.Root>
    );
};
