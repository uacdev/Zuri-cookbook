export const SimpleSlider = () => {

    const zuriSpices = [
        'ZURI BEEF',
        'ZURI CHICKEN',
        'ZURI JOLLOF',
        'ZURI CLASSIC',
    ]

    const items = [...zuriSpices, ...zuriSpices, ...zuriSpices, ...zuriSpices, ...zuriSpices, ...zuriSpices]

    return (
        <div style={{ overflow: 'hidden', backgroundColor: '#1A1A2E', color: 'white', width: '100%', zIndex: 100 }}>
            <style>{`
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .ticker-track {
                    display: flex;
                    animation: ticker 8s linear infinite;
                    width: max-content;
                }
                .ticker-track:hover {
                    animation-play-state: paused;
                }
            `}</style>
            <div className="ticker-track">
                {items.map((spice, index) => (
                    <div
                        key={index}
                        style={{
                            padding: '0 4px',
                            fontSize: '16px',
                            fontWeight: 500,
                            whiteSpace: 'nowrap',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                        }}
                    >
                        {spice} <span>/</span>
                    </div>
                ))}
            </div>
        </div>
    )
}