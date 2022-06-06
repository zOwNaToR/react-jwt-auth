import React from 'react';

export type KeyValue<T> = {
	[key: string]: T;
};

export type NFC<T = unknown> = React.FC<React.PropsWithChildren<T>>;
